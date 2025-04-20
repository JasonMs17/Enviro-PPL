<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MaterialReport;
use Illuminate\Support\Facades\Auth;

class MaterialReportController extends Controller
{
    public function trackProgress(Request $request)
    {
        $request->validate([
            'material_id' => 'required|exists:materials,material_id',
        ]);

        /** @var \App\Models\User $user */
        $user = Auth::user();

        // Cek apakah sudah ada record
        $report = MaterialReport::firstOrNew([
            'user_id' => $user->id,
            'material_id' => $request->material_id,
        ]);

        // Jika belum pernah, anggap 100% (sudah buka berarti selesai)
        $report->progress = 100;
        $report->save();

        return response()->json([
            'message' => 'Progress saved.',
            'data' => $report,
        ]);
    }
}
