<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up(): void
    {
        // Drop the view if it exists first
        DB::statement('DROP VIEW IF EXISTS user_completed_challenges');

        // Create the view
        DB::statement("
            CREATE VIEW user_completed_challenges AS
            SELECT 
                challenge_reports.user_id,
                challenges.id as challenge_id,
                challenges.title,
                challenges.description,
                challenge_reports.progress,
                challenge_reports.completed_at
            FROM challenge_reports
            JOIN challenges ON challenge_reports.challenge_id = challenges.id
            WHERE challenge_reports.progress = 100
        ");
    }

    public function down(): void
    {
        // Check if view exists before dropping
        $viewExists = DB::select("
            SELECT COUNT(*) as count 
            FROM information_schema.views 
            WHERE table_schema = DATABASE() 
            AND table_name = 'user_completed_challenges'
        ");

        if ($viewExists[0]->count > 0) {
            DB::statement('DROP VIEW user_completed_challenges');
        }
    }
};
