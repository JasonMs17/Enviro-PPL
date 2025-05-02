<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MaterialReport;
use App\Models\Material;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

    public function overallProgress()
    {
        $user = Auth::user();
    
        // Ambil total materi per jenis polusi
        $totalByType = Material::select('pollution_type_id')
            ->selectRaw('COUNT(*) as total')
            ->groupBy('pollution_type_id')
            ->pluck('total', 'pollution_type_id');
    
        // Ambil jumlah materi selesai per jenis polusi
        $completedByType = MaterialReport::where('material_reports.user_id', $user->id)
            ->where('material_reports.progress', '>=', 100)
            ->join('materials', 'material_reports.material_id', '=', 'materials.material_id')
            ->select('materials.pollution_type_id')
            ->selectRaw('COUNT(*) as completed')
            ->groupBy('materials.pollution_type_id')
            ->pluck('completed', 'pollution_type_id');
    
        // Ambil data photo dari tabel pollution_types
        $photos = DB::table('pollution_types')
            ->select('pollution_type_id', 'photo')
            ->pluck('photo', 'pollution_type_id');
    
        $progressByType = [];
    
        foreach ($totalByType as $typeId => $total) {
            $done = $completedByType[$typeId] ?? 0;
            $progress = round(($done / $total) * 100);
    
            $progressByType[$typeId] = [
                'progress' => $progress,
                'photo' => $photos[$typeId] ?? null,
            ];
        }
    
        return response()->json([
            'progress_by_type' => $progressByType,
        ]);
    }
    

    public function getCompletedMaterials()
    {
        $user = Auth::user();

        $completed = MaterialReport::where('user_id', $user->id)
            ->where('progress', 100)
            ->pluck('material_id');

        return response()->json($completed);
    }
}
