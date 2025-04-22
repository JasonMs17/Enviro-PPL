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
        Schema::create('materials', function (Blueprint $table) {
            $table->id('material_id');
            $table->string('title');
            //$table->enum('type', ['artikel', 'video', 'infografis']);
            $table->unsignedBigInteger('pollution_type_id');
            $table->text('content');
            $table->timestamps();
        
            $table->foreign('pollution_type_id')
                  ->references('pollution_type_id')
                  ->on('pollution_types')
                  ->onDelete('cascade');
        });

        DB::table('materials')->insert([
            ['title' => 'Sub bab 1 Materi 1', 'pollution_type_id' => 1, 'content' => 'Apa Itu Polusi Air?', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Materi 2', 'pollution_type_id' => 1, 'content' => 'Penyebab Polusi Air', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Materi 3', 'pollution_type_id' => 1, 'content' => 'Dampak Umum Polusi Air', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 1', 'pollution_type_id' => 1, 'content' => 'Air Tercemar dan Penyakit', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 2', 'pollution_type_id' => 1, 'content' => 'Siapa yang Paling Terdampak?', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 3', 'pollution_type_id' => 1, 'content' => 'Menentukan Air Aman Dikonsumsi', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 1', 'pollution_type_id' => 1, 'content' => 'Pengolahan Limbah Air', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 2', 'pollution_type_id' => 1, 'content' => 'Aksi Individu untuk Menjaga Air', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 3', 'pollution_type_id' => 1, 'content' => 'Pengelolaan Air Berkelanjutan', 'created_at' => now(), 'updated_at' => now()],

            ['title' => 'Sub bab 1 Materi 1', 'pollution_type_id' => 2, 'content' => 'Apa Itu Polusi Udara dan Sumbernya', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Materi 2', 'pollution_type_id' => 2, 'content' => 'Jenis Polutan di Udara', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Materi 3', 'pollution_type_id' => 2, 'content' => 'Dampak Polusi terhadap Lingkungan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 1', 'pollution_type_id' => 2, 'content' => 'Bagaimana Polusi Udara Mempengaruhi Tubuh Kita', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 2', 'pollution_type_id' => 2, 'content' => 'Pencegahan & Penanganan Risiko Kesehatan Akibat Polusi', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 3', 'pollution_type_id' => 2, 'content' => 'Siapa yang Paling Terdampak?', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 1', 'pollution_type_id' => 2, 'content' => 'Inovasi di Kota-Kota Besar untuk Mengatasi Polusi Udara', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 2', 'pollution_type_id' => 2, 'content' => 'Peran Pemerintah dan Regulasi', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 3', 'pollution_type_id' => 2, 'content' => 'Aksi Individu untuk Udara Lebih Bersih', 'created_at' => now(), 'updated_at' => now()],

            ['title' => 'Sub bab 1 Materi 1', 'pollution_type_id' => 3, 'content' => 'Apa Itu Polusi Tanah & Penyebabnya', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Materi 2', 'pollution_type_id' => 3, 'content' => 'Dampak Polusi Tanah terhadap Lingkungan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Materi 3', 'pollution_type_id' => 3, 'content' => 'Jenis-Jenis Limbah Penyebab Polusi Tanah', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 1', 'pollution_type_id' => 3, 'content' => 'Zat Berbahaya yang Terkandung dalam Tanah Tercemar', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 2', 'pollution_type_id' => 3, 'content' => 'Risiko Kesehatan Akibat Polusi Tanah', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Materi 3', 'pollution_type_id' => 3, 'content' => 'Kontaminasi pada Tanaman & Dampaknya ke Manusia', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 1', 'pollution_type_id' => 3, 'content' => 'Pengelolaan Sampah & Limbah Rumah Tangga', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 2', 'pollution_type_id' => 3, 'content' => 'Teknologi Pengendalian & Pemulihan Tanah', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Materi 3', 'pollution_type_id' => 3, 'content' => 'Peran Masyarakat & Edukasi Lingkungan', 'created_at' => now(), 'updated_at' => now()],

            ['title' => 'Sub bab 1 Kuis 1', 'pollution_type_id' => 1, 'content' => 'Pengenalan Polusi Air & Dampak Umum', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Kuis 1', 'pollution_type_id' => 1, 'content' => 'Penyebab Polusi Air & Dampaknya terhadap Kesehatan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Kuis 1', 'pollution_type_id' => 1, 'content' => 'Solusi Menjaga Kualitas Air', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Kuis 2', 'pollution_type_id' => 2, 'content' => 'Pengenalan Polusi Udara & Dampaknya terhadap Lingkungan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Kuis 2', 'pollution_type_id' => 2, 'content' => 'Dampak Polusi Udara terhadap Kesehatan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Kuis 2', 'pollution_type_id' => 2, 'content' => 'Solusi dan Upaya Penanggulangan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 1 Kuis 3', 'pollution_type_id' => 3, 'content' => 'Pengenalan Polusi Tanah & Penyebabnya', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 2 Kuis 3', 'pollution_type_id' => 3, 'content' => 'Dampak Polusi Tanah terhadap Kesehatan', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Sub bab 3 Kuis 3', 'pollution_type_id' => 3, 'content' => 'Solusi Mengatasi Polusi Tanah', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};
