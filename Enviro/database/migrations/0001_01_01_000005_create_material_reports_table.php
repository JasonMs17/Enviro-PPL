<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('material_reports', function (Blueprint $table) {
            $table->id(); // auto increment
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('material_id');
            $table->integer('progress');
            $table->timestamps();
        
            $table->foreign('user_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');
        
            $table->foreign('material_id')
                  ->references('material_id')
                  ->on('materials')
                  ->onDelete('cascade');
        });      
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('material_reports');
    }
};
