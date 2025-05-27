<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $primaryKey = 'quiz_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'quiz_id',
        'pollution_type_id',
        'sub_bab',
        'question',
        'options',
        'correct_answer',
        'type' // 'PG', 'checkbox', 'drag'
    ];

    protected $casts = [
        'options' => 'array',
        'correct_answer' => 'array'
    ];

    public function reports()
    {
        return $this->hasMany(QuizReport::class, 'quiz_id', 'quiz_id');
    }

    // Helper method untuk validasi jawaban berdasarkan tipe quiz
    public function validateAnswer($userAnswer)
    {
        switch ($this->type) {
            case 'PG':
                // Untuk PG, jawaban harus sama persis dengan correct_answer[0]
                return $userAnswer === $this->correct_answer[0];

            case 'checkbox':
                // Untuk checkbox, semua jawaban benar harus dipilih dan tidak ada jawaban salah
                $correctAnswers = $this->correct_answer;
                sort($correctAnswers);
                sort($userAnswer);
                return $correctAnswers === $userAnswer;

            case 'drag':
                // Untuk drag, setiap options[i] harus cocok dengan correct_answer[i]
                if (count($userAnswer) !== count($this->options)) {
                    return false;
                }
                foreach ($userAnswer as $index => $answer) {
                    if ($answer !== $this->correct_answer[$index]) {
                        return false;
                    }
                }
                return true;

            default:
                return false;
        }
    }

    // Helper method untuk mendapatkan format jawaban yang benar
    public function getCorrectAnswerFormat()
    {
        switch ($this->type) {
            case 'PG':
                return [
                    'type' => 'single',
                    'correct' => $this->correct_answer[0]
                ];

            case 'checkbox':
                return [
                    'type' => 'multiple',
                    'correct' => $this->correct_answer
                ];

            case 'drag':
                return [
                    'type' => 'matching',
                    'pairs' => array_combine($this->options, $this->correct_answer)
                ];

            default:
                return null;
        }
    }
}
