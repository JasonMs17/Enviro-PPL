<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChallengeSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('challenges')->insert([
            [
                'title' => 'Gunakan Transportasi Umum!',
                'description' => 'Naik transportasi umum setiap keluar minggu ini.',
                'reward' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1746465156/reward_1_wrh5yf.png',
                'question' => 'Apakah kamu naik transportasi umum setiap keluar minggu ini?',
                'question2' => 'Upload foto naik kendaraan umum.',
                'question3' => 'Tulis nama kendaraan umum yang kamu naiki selama satu minggu.',
                'answer' => json_encode([
                    'Ya dong!! As always',
                    'Ga selalu si, tapi lumayan sering',
                    'Cuma sekali dua kali',
                    'Ga, kan ada mobil/motor'
                ]),
                'fail_answer' => 'Ga, kan ada mobil/motor',
            ],
            [
                'title' => 'Jadi Pahlawan Tanah!',
                'description' => 'Pilah sampah organik dan anorganik mulai hari ini.',
                'reward' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1746465156/reward_2_udlzgb.png',
                'question' => 'Apakah kamu sudah memisahkan sampah organik dan anorganik hari ini?',
                'question2' => 'Upload foto contoh sampah yang sudah dipilah.',
                'question3' => 'Tulis jenis sampah organik dan anorganik yang kamu pilah hari ini.',
                'answer' => json_encode([
                    'Sudah! Semua sampah kupilah ✨',
                    'Hampir selesai! Akan dilanjut lagi nanti',
                    'Sebagian, masih belajar pilahnya',
                    'Belum, lupa nih 😥'
                ]),
                'fail_answer' => 'Belum, lupa nih 😥',
            ],
            [
                'title' => 'Hijaukan Rumahmu!',
                'description' => 'Tanam minimal satu tanaman baru minggu ini.',
                'reward' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1746465156/reward_3_sizp6g.png',
                'question' => 'Apakah kamu menanam tanaman baru minggu ini?',
                'question2' => 'Upload foto tanaman yang ditanam',
                'question3' => 'Tulis nama tanaman yang kamu tanam.',
                'answer' => json_encode([
                    'Yes! Sudah tanam 🌿',
                    'Sudah ada tanamannya, tinggal ditanam.',
                    'Belum, tapi ada rencana 😅',
                    'Belum dan tidak berencana'
                ]),
                'fail_answer' => 'Belum dan tidak berencana',
            ],
            [
                'title' => 'Bersih-bersih Sungai!',
                'description' => 'Ambil 3 sampah yang kamu temui di sekitar.',
                'reward' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1746465156/reward_4_nz4isw.png',
                'question' => 'Apakah kamu sudah memungut minimal 3 sampah di sekitar sungai atau lingkunganmu?',
                'question2' => 'Upload foto sampah yang dikumpulkan.',
                'question3' => 'Tulis lokasi kamu melakukan bersih-bersih, misal: sungai deket rumah, lingkungan kompleks, dll.',
                'answer' => json_encode([
                    'Sudah! 3 sampah berhasil diamankan 🛡',
                    'Lebih dari 3 malah! 🔥',
                    'Belakangan ini sering nih, udah jadi kebiasaan.',
                    'Belum sempat 😞'
                ]),
                'fail_answer' => 'Belum sempat 😞',
            ],
            [
                'title' => 'Jaga Paru-parumu!',
                'description' => 'Pakai masker saat keluar di daerah berpolusi.',
                'reward' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1746465155/reward_5_ztzpeg.png',
                'question' => 'Apakah kamu menggunakan masker saat berada di area berpolusi minggu ini?',
                'question2' => 'Upload foto selfie atau foto situasi kamu memakai masker.',
                'question3' => 'Tulis tempat yang kamu kunjungi.',
                'answer' => json_encode([
                    'Selalu pakai! 😷',
                    'Sering!',
                    'Kadang-kadang',
                    'Tidak sama sekali'
                ]),
                'fail_answer' => 'Tidak sama sekali',
            ]
        ]);
    }
}
