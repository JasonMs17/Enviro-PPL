<?php

namespace App\Http\Controllers;

use App\Models\Challenge;
use App\Models\ChallengeReport;
use App\Mail\ChallengeReminder;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ChallengeController extends Controller
{

    public function showchallenge(): JsonResponse
    {
        $challenges = DB::table('available_challenges')
            ->select('id', 'title', 'description')
            ->get();

        return response()->json($challenges);
    }

    public function claimChallenge(Request $request)
    {
        $request->validate([
            'challenge_id' => 'required|exists:challenges,id',
        ]);
    
        $user = Auth::user();
    
        $alreadyClaimed = ChallengeReport::where('user_id', $user->id)
            ->where('challenge_id', $request->challenge_id)
            ->exists();
    
        if ($alreadyClaimed) {
            return response()->json(['message' => 'Challenge already claimed'], 409);
        }
    
        $report = ChallengeReport::create([
            'user_id' => $user->id,
            'challenge_id' => $request->challenge_id,
            'countdown_end_at' => now()->addDays(7),
        ]);
    
        return response()->json([
            'message' => 'Challenge claimed successfully',
            'report' => $report,
        ]);
    }
    
    public function showClaimed()
    {
        $userId = Auth::id();

        $report = ChallengeReport::where('user_id', $userId)
            ->where('active', 1)
            ->latest()
            ->first();

        if (!$report) {
            return response()->json([
                'message' => 'No active claimed challenge found',
                'completed' => true,
                'seconds_remaining' => 0,
                'countdown_end_at' => null
            ], 404);
        }

        $challenge = Challenge::find($report->challenge_id);
        $secondsRemaining = now()->diffInSeconds($report->countdown_end_at, false);

        // Return response dengan format yang diharapkan frontend
        return response()->json([
            ...$challenge->toArray(),
            'seconds_remaining' => max($secondsRemaining, 0),
            'completed' => $report->completed_at !== null,
            'countdown_end_at' => $report->countdown_end_at,
            'failed' => $report->failed ?? false
        ]);
    }

    public function submitProof(Request $request)
    {
        $userId = Auth::id();
    
        $request->validate([
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'text_answer' => 'required|string',
        ]);
    
        $report = ChallengeReport::where('user_id', $userId)
            ->whereNull('completed_at')
            ->latest()
            ->first();
    
        if (!$report) {
            return response()->json(['message' => 'No active claimed challenge found'], 404);
        }
    
        try {
            $uploadedFile = Cloudinary::uploadApi()->upload(
                $request->file('photo')->getRealPath(),
                [
                    'folder' => 'ChallengeProof',
                    'public_id' => 'user_' . $userId . '_challenge_' . $report->challenge_id . '_' . time(),
                    'overwrite' => true,
                    'resource_type' => 'image'
                ]
            );
    
            $report->update([
                'photo_proof' => $uploadedFile['secure_url'],
                'text_answer' => $request->text_answer,
                'progress' => 100,
                'completed_at' => Carbon::now(),
            ]);
    
            return response()->json(['message' => 'Challenge proof submitted successfully.']);
        } catch (\Exception $e) {
            //Log::error('Cloudinary upload error: ' . $e->getMessage());
    
            return response()->json([
                'message' => 'Upload failed',
                'error' => $e->getMessage(),
            ], 500);
        }
    }    

    public function overallProgress()
    {
        $userId = Auth::id();

        $totalChallenges = Challenge::count();

        $totalProgress = ChallengeReport::where('user_id', $userId)
            ->sum('progress');

        if ($totalChallenges === 0) {
            return response()->json(['percentage' => 0]);
        }

        $percentage = round($totalProgress / $totalChallenges);

        return response()->json(['percentage' => $percentage]);
    }
    public function userCompletedChallenges()
    {
        $userId = Auth::id();

        $completedChallenges = DB::table('challenge_reports')
            ->join('challenges', 'challenge_reports.challenge_id', '=', 'challenges.id')
            ->where('challenge_reports.user_id', $userId)
            // ->where('challenge_reports.progress', 100)
            ->orderBy('challenge_reports.completed_at', 'desc')
            ->select('challenge_reports.*', 'challenges.description', 'challenges.title', 'challenges.reward')
            ->get();

        return response()->json($completedChallenges);
    }

    public function deactivate()
    {
        $userId = Auth::id();

        $report = ChallengeReport::where('user_id', $userId)
            ->where('countdown_end_at', '<=', now())
            ->where('active', 1)
            ->first();

        if (!$report) {
            return response()->json(['message' => 'No challenge to deactivate'], 400);
        }

        if ($report->completed_at === null) {
            $report->delete();
            return response()->json(['message' => 'Uncompleted challenge deleted successfully']);
        }

        $report->update(['active' => 0]);
        return response()->json(['message' => 'Challenge deactivated successfully']);
    }

    public function checkActiveChallenge()
    {
        $userId = Auth::id();

        $activeChallenge = ChallengeReport::where('user_id', $userId)
            ->where('active', 1)
            ->first();

        if (!$activeChallenge) {
            return response()->json(['has_active_challenge' => false]);
        }

        return response()->json([
            'has_active_challenge' => true,
        ]);
    }

    public function sendReminderEmail(Request $request)
    {
        $userId = Auth::id();
        
        $report = ChallengeReport::where('user_id', $userId)
            ->where('active', 1)
            ->whereNull('completed_at')
            ->first();

        if (!$report) {
            return response()->json(['message' => 'No active challenge found'], 404);
        }

        if ($report->reminder_sent) {
            return response()->json(['message' => 'Reminder already sent']);
        }

        $user = Auth::user();
        
        try {
            Mail::to($user->email)->send(new ChallengeReminder($user, $report));
            $report->update(['reminder_sent' => true]);
            return response()->json(['message' => 'Reminder email sent successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to send email', 'error' => $e->getMessage()], 500);
        }
    }

    public function checkReminderStatus()
    {
        $userId = Auth::id();

        $report = ChallengeReport::where('user_id', $userId)
            ->where('active', 1)
            ->latest()
            ->first();

        return response()->json([
            'reminderSent' => $report ? $report->reminder_sent : false
        ]);
    }

    public function failChallenge()
    {
        $userId = Auth::id();

        $report = ChallengeReport::where('user_id', $userId)
            ->where('active', 1)
            ->first();

        if (!$report) {
            return response()->json(['message' => 'No active challenge to mark as failed'], 404);
        }

        $report->update([
            'failed' => true,
        ]);

        return response()->json(['message' => 'Challenge marked as failed successfully']);
    }

}