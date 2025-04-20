<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PollutionTypes extends Model
{
    use HasFactory;

    protected $primaryKey = 'pollution_type_id';

    protected $fillable = [
        'name',
        'description',
    ];

    public function materials()
    {
        return $this->hasMany(Material::class, 'pollution_type_id', 'pollution_type_id');
    }
}