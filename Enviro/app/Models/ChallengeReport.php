<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ChallengeReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'challenge_id',
        'photo_proof',
        'text_answer',
        'progress',
        'completed_at',
    ];

    protected $dates = [
        'completed_at',
    ];
}
