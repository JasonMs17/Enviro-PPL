<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;

class QuizController extends Controller
{
    public function index(Request $request)
    {
        $pollutionTypeId = $request->query('pollution_type_id');
        $subbab = $request->query('sub_bab');

        $query = Quiz::query();

        if ($pollutionTypeId) {
            $query->where('pollution_type_id', $pollutionTypeId);
        }

        if ($subbab) {
            $query->where('sub_bab', $subbab);
        }

        $quizzes = $query->get();

        return response()->json($quizzes);
    }
}
