<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up(): void
    {
        DB::statement("
            CREATE VIEW user_completed_materials AS
            SELECT 
                material_reports.user_id,
                materials.material_id as material_id,
                materials.title,
                materials.content,
                pollution_types.photo
            FROM material_reports
            JOIN materials ON material_reports.material_id = materials.material_id
            JOIN pollution_types ON materials.pollution_type_id = pollution_types.pollution_type_id
            WHERE material_reports.progress = 100
        ");
    }

    public function down(): void
    {
        DB::statement("DROP VIEW IF EXISTS user_completed_materials");
    }
};
