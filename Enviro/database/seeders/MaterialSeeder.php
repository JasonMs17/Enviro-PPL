<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MaterialSeeder extends Seeder
{
    public function run()
    {
        DB::table('materials')->insert([
            ['bab' => 'Sub bab 1 Materi 1', 'pollution_type_id' => 1, 'title' => 'Apa Itu Polusi Air?', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 1 Materi 2', 'pollution_type_id' => 1, 'title' => 'Penyebab Polusi Air', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 1 Materi 3', 'pollution_type_id' => 1, 'title' => 'Dampak Umum Polusi Air', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 1', 'pollution_type_id' => 1, 'title' => 'Air Tercemar dan Penyakit', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 2', 'pollution_type_id' => 1, 'title' => 'Siapa yang Paling Terdampak?', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 3', 'pollution_type_id' => 1, 'title' => 'Menentukan Air Aman Dikonsumsi', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 1', 'pollution_type_id' => 1, 'title' => 'Pengolahan Limbah Air', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 2', 'pollution_type_id' => 1, 'title' => 'Aksi Individu untuk Menjaga Air', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 3', 'pollution_type_id' => 1, 'title' => 'Pengelolaan Air Berkelanjutan', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            // --- Polusi Udara
            ['bab' => 'Sub bab 1 Materi 1', 'pollution_type_id' => 2, 'title' => 'Apa Itu Polusi Udara dan Sumbernya', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 1 Materi 2', 'pollution_type_id' => 2, 'title' => 'Jenis Polutan di Udara', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 1 Materi 3', 'pollution_type_id' => 2, 'title' => 'Dampak Polusi terhadap Lingkungan', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 1', 'pollution_type_id' => 2, 'title' => 'Bagaimana Polusi Udara Mempengaruhi Tubuh Kita', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 2', 'pollution_type_id' => 2, 'title' => 'Pencegahan & Penanganan Risiko Kesehatan Akibat Polusi', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 3', 'pollution_type_id' => 2, 'title' => 'Siapa yang Paling Terdampak?', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 1', 'pollution_type_id' => 2, 'title' => 'Inovasi di Kota-Kota Besar untuk Mengatasi Polusi Udara', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 2', 'pollution_type_id' => 2, 'title' => 'Peran Pemerintah dan Regulasi', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 3', 'pollution_type_id' => 2, 'title' => 'Aksi Individu untuk Udara Lebih Bersih', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            // --- Polusi Tanah
            ['bab' => 'Sub bab 1 Materi 1', 'pollution_type_id' => 3, 'title' => 'Apa Itu Polusi Tanah & Penyebabnya', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 1 Materi 2', 'pollution_type_id' => 3, 'title' => 'Dampak Polusi Tanah terhadap Lingkungan', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 1 Materi 3', 'pollution_type_id' => 3, 'title' => 'Jenis-Jenis Limbah Penyebab Polusi Tanah', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 1', 'pollution_type_id' => 3, 'title' => 'Zat Berbahaya yang Terkandung dalam Tanah Tercemar', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 2', 'pollution_type_id' => 3, 'title' => 'Risiko Kesehatan Akibat Polusi Tanah', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 2 Materi 3', 'pollution_type_id' => 3, 'title' => 'Kontaminasi pada Tanaman & Dampaknya ke Manusia', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 1', 'pollution_type_id' => 3, 'title' => 'Pengelolaan Sampah & Limbah Rumah Tangga', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 2', 'pollution_type_id' => 3, 'title' => 'Teknologi Pengendalian & Pemulihan Tanah', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
            ['bab' => 'Sub bab 3 Materi 3', 'pollution_type_id' => 3, 'title' => 'Peran Masyarakat & Edukasi Lingkungan', 'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
