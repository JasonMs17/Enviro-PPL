<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id('quiz_id');
            $table->unsignedBigInteger('pollution_type_id');
            $table->integer('sub_bab');
            $table->string('type');
            $table->text('question');
            $table->text('options'); // JSON string
            $table->text('correct_answer');
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
        Schema::dropIfExists('quizzes');
    }
};
