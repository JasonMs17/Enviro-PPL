<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MaterialController extends Controller
{
    public function userCompletedMaterials()
    {
        $userId = Auth::id();

        $materials = DB::table('user_completed_materials')
            ->where('user_id', $userId)
            ->orderBy('material_id', 'asc')
            ->get()
            ->map(function ($material) {
                return [
                    'material_id' => $material->material_id,
                    'title' => $material->title,
                    'content' => $material->content,
                    'photo' => $material->photo,
                ];
            });

        return response()->json($materials);
    }
}
