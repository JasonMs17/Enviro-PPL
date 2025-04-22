<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PollutionType extends Model
{
    protected $primaryKey = 'pollution_type_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['pollution_type_id', 'name', 'description'];
}
