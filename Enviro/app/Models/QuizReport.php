<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuizReport extends Model
{
    protected $primaryKey = 'quiz_report_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'quiz_report_id',
        'user_id',
        'quiz_id',
        'user_answer',
        'is_correct',
        'completed_at'
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id', 'quiz_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
