<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuizReport;

class QuizReportController extends Controller
{
    public function index(Request $request)
    {
        $reports = QuizReport::where('user_id', $request->user_id)
            ->whereHas('quiz', function ($query) use ($request) {
                $query->where('pollution_type_id', $request->pollution_type_id)
                    ->where('sub_bab', $request->subbab);
            })
            ->get();

        return response()->json($reports);
    }

    public function store(Request $request)
    {
        $exists = QuizReport::where('user_id', $request->user_id)
            ->where('quiz_id', $request->quiz_id)
            ->first();

        if (!$exists) {
            $report = new QuizReport();
            $report->user_id = $request->user_id;
            $report->quiz_id = $request->quiz_id;
            $report->user_answer = $request->user_answer;
            $report->is_correct = $request->is_correct;
            $report->completed_at = now();
            $report->save();
        }

        return response()->json(['message' => 'Saved']);
    }
}
