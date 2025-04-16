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
        Schema::create('materials', function (Blueprint $table) {
            $table->id('material_id');
            $table->string('title');
            $table->enum('type', ['artikel', 'video', 'infografis']);
            $table->unsignedBigInteger('pollution_type_id');
            $table->text('content');
            $table->timestamps();
        
            $table->foreign('pollution_type_id')
                  ->references('pollution_type_id')
                  ->on('pollution_types')
                  ->onDelete('cascade');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};
