<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PollutionType;
use App\Models\Material;

class MaterialController extends Controller
{public function index(Request $request)
    {
        $materialId = $request->query('material_id');
    
        $material = Material::find($materialId);
    
        if (!$material) {
            return response()->json(['message' => 'Material not found'], 404);
        }
    
        $pollutionType = PollutionType::find($material->pollution_type_id);
    
        $pollutionMaterial = [
            'photo' => $pollutionType ? $pollutionType->photo : null,
            'title' => $material->title,
            'content' => $material->content,
        ];
    
        return response()->json($pollutionMaterial);
    }
}