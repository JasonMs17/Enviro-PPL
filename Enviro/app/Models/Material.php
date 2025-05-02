<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    protected $primaryKey = 'material_id';

    protected $fillable = [
        'title',
        'pollution_type_id',
        'content',
        'detail',
        'sub_bab',
    ];

    public function pollutionType()
    {
        return $this->belongsTo(PollutionTypes::class, 'pollution_type_id', 'pollution_type_id');
    }

    public function materialReports()
    {
        return $this->hasMany(MaterialReport::class, 'material_id', 'material_id');
    }
}
