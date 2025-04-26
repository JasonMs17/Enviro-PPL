<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PollutionType;
use App\Models\Material;

class MaterialController extends Controller
{
    public function index()
    {
        $pollutionTypes = PollutionType::all();
        $materials = Material::all();

        $pollutionMaterials = $pollutionTypes->map(function ($pollutionType) use ($materials) {
            $material = $materials->where('pollution_type_id', $pollutionType->pollution_type_id)->first();

            return [
                'photo' => $pollutionType->photo,
                'title' => $material ? $material->title : '-',
                'content' => $material ? $material->content : '-',
            ];
        });

        return response()->json([
            'data' => $pollutionMaterials,
        ]);
    }
}