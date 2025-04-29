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
            ->join('materials', 'user_completed_materials.material_id', '=', 'materials.material_id')
            ->where('user_completed_materials.user_id', $userId)
            ->whereRaw('LOWER(materials.bab) NOT LIKE ?', ['%Kuis%'])
            ->orderBy('user_completed_materials.material_id', 'asc')
            ->select('user_completed_materials.*')
            ->get();
    
        return response()->json($materials);
    }
    
}
