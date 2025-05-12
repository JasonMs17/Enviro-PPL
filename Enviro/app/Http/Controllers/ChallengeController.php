<?php

namespace App\Http\Controllers;

use App\Models\Challenge;
use App\Models\ChallengeReport;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Carbon;

class ChallengeController extends Controller
{
    public function showchallenge(): JsonResponse
    {
        $challenges = Challenge::where('completed', 0)
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
        ]);
    
        // Ubah status challenge menjadi completed (1)
        Challenge::where('id', $request->challenge_id)->update(['completed' => 1]);
    
        return response()->json([
            'message' => 'Challenge claimed successfully',
            'report' => $report,
        ]);
    }
    
    public function showClaimed()
    {
        $userId = Auth::id();

        $report = ChallengeReport::where('user_id', $userId)
            ->whereNull('completed_at')
            ->orderBy('created_at', 'desc')
            ->first();

        if (!$report) {
            return response()->json(['message' => 'No active claimed challenge found'], 404);
        }

        $challenge = Challenge::find($report->challenge_id);

        return response()->json($challenge);
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
}


