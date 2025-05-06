<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Challenge extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'reward',
        'question',
        'question2',
        'question3',
        'answer',
        'fail_answer',
    ];

    protected $casts = [
        'answer' => 'array',
    ];
}
