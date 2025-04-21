<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MaterialReport;
use App\Models\Material;
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

        $report = MaterialReport::firstOrNew([
            'user_id' => $user->id,
            'material_id' => $request->material_id,
        ]);

        $report->progress = 100;
        $report->save();

        return response()->json([
            'message' => 'Progress saved.',
            'data' => $report,
        ]);
    }

    public function getOverallProgress()
    {
        $user = Auth::user();

        $totalMaterials = Material::count();

        if ($totalMaterials === 0) {
            return response()->json([
                'progress' => 0,
                'message' => 'Belum ada materi tersedia.',
            ]);
        }

        $userReports = MaterialReport::where('user_id', $user->id)->get();
        $totalProgress = $userReports->sum('progress');
        $maxProgress = $totalMaterials * 100;

        // Hitung persentase progress keseluruhan
        $percentage = round(($totalProgress / $maxProgress) * 100);

        return response()->json([
            'progress' => $percentage,
            'message' => 'Progress keseluruhan berhasil dihitung.',
        ]);
    }
}
