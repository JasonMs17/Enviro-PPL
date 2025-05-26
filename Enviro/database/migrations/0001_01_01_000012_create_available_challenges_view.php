<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement('DROP VIEW IF EXISTS available_challenges');
        DB::statement("
            CREATE VIEW available_challenges AS
            SELECT c.*
            FROM challenges c
            LEFT JOIN challenge_reports cr ON c.id = cr.challenge_id
            WHERE cr.challenge_id IS NULL
        ");
    }

    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS available_challenges");
    }
};

