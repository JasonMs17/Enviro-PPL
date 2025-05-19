<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up(): void
    {
        DB::statement("
            CREATE VIEW user_completed_quiz AS
            SELECT 
                quiz_reports.user_id,
                quizzes.quiz_id as quiz_id,
                quizzes.title,
                quizzes.description,
                quiz_reports.score,
                quiz_reports.completed_at
            FROM quiz_reports
            JOIN quizzes ON quiz_reports.quiz_id = quizzes.quiz_id
            WHERE quiz_reports.status = 'completed'
        ");
    }

    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS user_completed_quiz");
    }
};
