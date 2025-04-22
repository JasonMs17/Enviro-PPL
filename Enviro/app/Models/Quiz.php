<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $primaryKey = 'quiz_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['quiz_id', 'pollution_type_id', 'sub_bab', 'question', 'options', 'correct_answer'];

    public function reports()
    {
        return $this->hasMany(QuizReport::class, 'quiz_id', 'quiz_id');
    }
}
