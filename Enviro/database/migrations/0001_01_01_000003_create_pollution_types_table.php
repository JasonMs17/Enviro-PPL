<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('pollution_types', function (Blueprint $table) {
            $table->id('pollution_type_id');
            $table->string('name');
            $table->text('description');
            $table->timestamps();
        });

        DB::table('pollution_types')->insert([
            [
                'name' => 'Polusi Air',
                'description' => 'Pencemaran pada air akibat limbah industri, rumah tangga, atau pertanian.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Polusi Udara',
                'description' => 'Pencemaran udara akibat emisi kendaraan, industri, atau pembakaran bahan bakar fosil.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Polusi Tanah',
                'description' => 'Pencemaran tanah karena limbah berbahaya, penggunaan pestisida berlebihan, atau penimbunan sampah sembarangan.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pollution_types');
    }
};
