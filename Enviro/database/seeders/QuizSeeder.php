<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa yang dimaksud dengan polusi air?',
                'options' => json_encode([
                    'Ketika air tercemar oleh zat-zat berbahaya akibat aktivitas manusia',
                    'Air yang digunakan untuk kebutuhan industri',
                    'Proses pemurnian air',
                    'Air yang digunakan untuk keperluan pertanian'
                ]),
                'correct_answer' => json_encode(['Ketika air tercemar oleh zat-zat berbahaya akibat aktivitas manusia']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Mana dari ciri-ciri berikut yang menunjukkan bahwa air tercemar?',
                'options' => json_encode([
                    'Tidak ada rasa atau bau',
                    'Munculnya endapan atau zat terlarut',
                    'Air yang bening',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => json_encode(['Munculnya endapan atau zat terlarut']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Polusi air terjadi ketika kualitas air menurun hingga tidak lagi layak untuk digunakan dalam kehidupan manusia, pertanian, atau menjaga ekosistem air tetap seimbang.',
                'options' => json_encode([
                    'Benar',
                    'Salah'
                ]),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa yang dimaksud dengan pencemaran mikrobiologis?',
                'options' => json_encode([
                    'Pencemaran akibat bakteri, virus, atau parasit berbahaya',
                    'Pencemaran akibat limbah industri',
                    'Pencemaran akibat suhu air yang tinggi',
                    'Pencemaran akibat pupuk berlebihan'
                ]),
                'correct_answer' => json_encode(['Pencemaran akibat bakteri, virus, atau parasit berbahaya']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa dampak utama dari pencemaran air terhadap ekosistem air?',
                'options' => json_encode([
                    'Keanekaragaman hayati menurun',
                    'Terjadinya ledakan alga yang tidak terkendali',
                    'Rantai makanan terganggu',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => json_encode(['Semua jawaban benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'Checklist',
                'question' => 'Fungsi penting air bagi kehidupan:',
                'options' => json_encode([
                    'Menopang ekosistem',
                    'Digunakan untuk pertanian',
                    'Menyebabkan pencemaran',
                    'Sumber air minum'
                ]),
                'correct_answer' => json_encode(['Menopang ekosistem', 'Digunakan untuk pertanian', 'Sumber air minum']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'Checklist',
                'question' => 'Faktor yang membuat air jadi tidak layak digunakan:',
                'options' => json_encode([
                    'Ketidakseimbangan pH',
                    'Terdapat logam berat',
                    'Suhu air stabil',
                    'Adanya mikroorganisme'
                ]),
                'correct_answer' => json_encode(['Ketidakseimbangan pH', 'Terdapat logam berat', 'Adanya mikroorganisme']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'type' => 'Drag',
                'question' => 'Cocokkan jenis pencemaran dengan sumber utamanya:',
                'options' => json_encode([
                    'mikrobiologis',
                    'termal',
                    'kimia organik'
                ]),
                'correct_answer' => json_encode([
                    'limbah manusia/hewan',
                    'industri/pembangkit listrik',
                    'rumah tangga & pertanian'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Apa penyakit yang paling sering muncul akibat pencemaran air?',
                'options' => json_encode([
                    'Kanker kulit',
                    'Diare',
                    'Penyakit jantung',
                    'Hepatitis B'
                ]),
                'correct_answer' => json_encode(['Diare']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Kolera disebabkan oleh bakteri Vibrio cholerae yang menyebar melalui air yang terkontaminasi.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Siapa yang paling rentan terkena dampak pencemaran air?',
                'options' => json_encode([
                    'Anak-anak saja',
                    'Orang dewasa saja',
                    'Lansia saja',
                    'Anak-anak dan lansia'
                ]),
                'correct_answer' => json_encode(['Anak-anak dan lansia']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Apa dampak kesehatan jangka panjang dari mengonsumsi air yang terkontaminasi logam berat seperti arsenik?',
                'options' => json_encode([
                    'Meningkatkan risiko penyakit jantung',
                    'Meningkatkan risiko kanker',
                    'Menurunkan daya tahan tubuh',
                    'Mengurangi kadar oksigen dalam darah'
                ]),
                'correct_answer' => json_encode(['Meningkatkan risiko kanker']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Air yang tampak jernih selalu aman untuk dikonsumsi.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Salah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'Checklist',
                'question' => 'Dampak polusi air terhadap masyarakat:',
                'options' => json_encode([
                    'Krisis air bersih',
                    'Penyakit menular meningkat',
                    'Risiko konflik sosial',
                    'Harga air makin murah'
                ]),
                'correct_answer' => json_encode(['Krisis air bersih', 'Penyakit menular meningkat', 'Risiko konflik sosial']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'Checklist',
                'question' => 'Cara polusi air dapat masuk ke tubuh:',
                'options' => json_encode([
                    'Melalui air minum',
                    'Kontak kulit langsung saat mandi',
                    'Konsumsi makanan yang dicuci dengan air kotor',
                    'Melalui udara'
                ]),
                'correct_answer' => json_encode(['Melalui air minum', 'Kontak kulit langsung saat mandi', 'Konsumsi makanan yang dicuci dengan air kotor']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'type' => 'Drag',
                'question' => 'Cocokkan jenis penyakit dengan penyebabnya:',
                'options' => json_encode([
                    'hepatitis a',
                    'tipes',
                    'iritasi kulit'
                ]),
                'correct_answer' => json_encode([
                    'air/makanan tercemar virus',
                    'bakteri dari makanan tak higienis',
                    'logam berat/kontaminan kulit'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa yang harus dilakukan pertama kali dalam pengolahan air limbah?',
                'options' => json_encode([
                    'Penyaringan kasar untuk memisahkan sampah besar',
                    'Disinfeksi dengan klorin',
                    'Pengolahan biologis dengan lumpur aktif',
                    'Pengendapan sekunder'
                ]),
                'correct_answer' => json_encode(['Penyaringan kasar untuk memisahkan sampah besar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa yang dapat dilakukan untuk mengurangi polusi air dari rumah tangga?',
                'options' => json_encode([
                    'Membuang minyak bekas ke saluran air',
                    'Menggunakan deterjen ramah lingkungan',
                    'Meningkatkan penggunaan plastik sekali pakai',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => json_encode(['Menggunakan deterjen ramah lingkungan']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Salah satu cara menjaga kualitas air adalah dengan tidak membuang sampah ke sungai atau saluran air.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa solusi untuk menghemat penggunaan air secara bijak di rumah?',
                'options' => json_encode([
                    'Mandi menggunakan shower biasa',
                    'Memperbaiki kebocoran pipa',
                    'Membiarkan keran menyala saat tidak digunakan',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => json_encode(['Memperbaiki kebocoran pipa']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa yang dapat dilakukan untuk menjaga sumber air alami tetap bersih dan aman?',
                'options' => json_encode([
                    'Tanam pohon di sekitar sumber air',
                    'Buang sampah ke sungai untuk mengurangi polusi',
                    'Tidak perlu memantau kualitas air secara berkala',
                    'Meningkatkan penggunaan bahan kimia di sekitar sumber air'
                ]),
                'correct_answer' => json_encode(['Tanam pohon di sekitar sumber air']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'Checklist',
                'question' => 'Hal yang perlu diperhatikan saat memilih sumber air:',
                'options' => json_encode([
                    'Dekat dengan TPA',
                    'Tidak dicek secara berkala',
                    'Bebas dari pencemar',
                    'Sumber terlindungi'
                ]),
                'correct_answer' => json_encode(['Dekat dengan TPA', 'Bebas dari pencemar', 'Sumber terlindungi']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'Checklist',
                'question' => 'Aksi sekolah untuk menjaga kualitas air:',
                'options' => json_encode([
                    'Edukasi hemat air',
                    'Buat biopori/resapan',
                    'Buang minyak ke wastafel',
                    'Aksi bersih sungai'
                ]),
                'correct_answer' => json_encode(['Edukasi hemat air', 'Buat biopori/resapan', 'Aksi bersih sungai']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'type' => 'Drag',
                'question' => 'Cocokkan teknologi pengolahan air dengan fungsinya:',
                'options' => json_encode([
                    'filtrasi sederhana',
                    'disinfeksi uv',
                    'biopori'
                ]),
                'correct_answer' => json_encode([
                    'menyaring partikel fisik',
                    'membunuh mikroorganisme',
                    'resapan air hujan ke tanah'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa yang dimaksud dengan polusi tanah?',
                'options' => json_encode([
                    'Proses alami yang menyebabkan perubahan tanah',
                    'Keadaan tanah yang tercemar oleh zat berbahaya, terutama bahan kimia buatan manusia',
                    'Proses pengolahan tanah untuk pertanian',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => json_encode(['Keadaan tanah yang tercemar oleh zat berbahaya, terutama bahan kimia buatan manusia']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Polusi tanah bisa terjadi pada dua lapisan utama tanah. Lapisan manakah yang biasanya tercemar karena pembuangan sampah dan limbah padat?',
                'options' => json_encode([
                    'Lapisan permukaan tanah',
                    'Lapisan bawah tanah',
                    'Lapisan subsoil',
                    'Lapisan udara'
                ]),
                'correct_answer' => json_encode(['Lapisan permukaan tanah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Polusi tanah hanya terjadi di area perkotaan yang padat penduduk.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Salah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa yang menjadi penyebab utama polusi tanah di daerah perkotaan?',
                'options' => json_encode([
                    'Kebocoran limbah cair dari pabrik',
                    'Tumpahan bahan kimia dari kendaraan',
                    'Pembuangan sampah sembarangan dan limbah rumah tangga',
                    'Penggunaan pupuk organik'
                ]),
                'correct_answer' => json_encode(['Pembuangan sampah sembarangan dan limbah rumah tangga']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa salah satu contoh polutan yang sering ditemukan di tanah akibat aktivitas industri?',
                'options' => json_encode([
                    'Oksigen',
                    'Karbon dioksida',
                    'Timbal dan merkuri',
                    'Nitrogen oksida'
                ]),
                'correct_answer' => json_encode(['Timbal dan merkuri']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'Checklist',
                'question' => 'Aktivitas manusia yang dapat menyebabkan polusi tanah:',
                'options' => json_encode([
                    'Pembuangan sampah langsung ke tanah',
                    'Penggunaan pestisida berlebihan',
                    'Menanam pohon di lahan kosong',
                    'Limbah cair industri bocor ke tanah'
                ]),
                'correct_answer' => json_encode(['Pembuangan sampah langsung ke tanah', 'Penggunaan pestisida berlebihan', 'Limbah cair industri bocor ke tanah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'Checklist',
                'question' => 'Ciri-ciri tanah yang mungkin sudah tercemar:',
                'options' => json_encode([
                    'Tanaman sulit tumbuh',
                    'Bau menyengat dari permukaan tanah',
                    'Warna tanah berubah',
                    'Banyak cacing di dalam tanah'
                ]),
                'correct_answer' => json_encode(['Tanaman sulit tumbuh', 'Bau menyengat dari permukaan tanah', 'Warna tanah berubah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'type' => 'Drag',
                'question' => 'Cocokkan sumber pencemaran dengan zat yang dihasilkannya:',
                'options' => json_encode([
                    'pertanian berlebihan',
                    'limbah industri',
                    'rumah tangga'
                ]),
                'correct_answer' => json_encode([
                    'pupuk kimia & pestisida',
                    'logam berat & bahan kimia',
                    'sampah organik & plastik'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Timbal adalah logam berat yang sering ditemukan di tanah tercemar. Apa yang bisa terjadi jika tubuh terpapar timbal secara terus-menerus?',
                'options' => json_encode([
                    'Meningkatkan daya tahan tubuh',
                    'Mengganggu sistem saraf dan ginjal',
                    'Meningkatkan kecerdasan',
                    'Membantu pertumbuhan rambut'
                ]),
                'correct_answer' => json_encode(['Mengganggu sistem saraf dan ginjal']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Arsenik adalah bahan kimia yang dapat menyebabkan kanker pada manusia jika terpapar dalam jangka panjang melalui tanah yang tercemar.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Bagaimana polusi tanah yang mengandung merkuri dapat memengaruhi kesehatan manusia?',
                'options' => json_encode([
                    'Meningkatkan kekebalan tubuh',
                    'Menyebabkan kerusakan pada sistem saraf dan ginjal',
                    'Membantu proses pencernaan',
                    'Meningkatkan kesehatan paru-paru'
                ]),
                'correct_answer' => json_encode(['Menyebabkan kerusakan pada sistem saraf dan ginjal']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Polusi tanah yang mengandung logam berat dapat menyebabkan gangguan sistem saraf. Apa gejala yang dapat timbul akibat paparan jangka panjang?',
                'options' => json_encode([
                    'Peningkatan daya ingat',
                    'Gangguan koordinasi dan kesulitan belajar pada anak-anak',
                    'Meningkatkan kemampuan motorik',
                    'Peningkatan penglihatan'
                ]),
                'correct_answer' => json_encode(['Gangguan koordinasi dan kesulitan belajar pada anak-anak']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Sayuran dan buah yang tumbuh di tanah tercemar dapat mengandung zat berbahaya. Apa dampaknya bagi manusia yang mengonsumsinya?',
                'options' => json_encode([
                    'Menyebabkan kerusakan pada organ tubuh dan meningkatkan risiko kanker',
                    'Tidak ada dampak, karena polutan hanya memengaruhi tanaman',
                    'Meningkatkan kekebalan tubuh',
                    'Tidak mempengaruhi kesehatan manusia'
                ]),
                'correct_answer' => json_encode(['Menyebabkan kerusakan pada organ tubuh dan meningkatkan risiko kanker']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'Checklist',
                'question' => 'Dampak polusi tanah terhadap makhluk hidup:',
                'options' => json_encode([
                    'Gangguan pada rantai makanan',
                    'Hewan mati karena pencemaran habitat',
                    'Udara makin jernih',
                    'Tanaman menyerap zat beracun'
                ]),
                'correct_answer' => json_encode(['Gangguan pada rantai makanan', 'Hewan mati karena pencemaran habitat', 'Tanaman menyerap zat beracun']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'Checklist',
                'question' => 'Efek jangka panjang polusi tanah:',
                'options' => json_encode([
                    'Penurunan kesuburan lahan',
                    'Polutan menetap dalam waktu lama',
                    'Terganggunya ekosistem tanah',
                    'Tanah lebih subur'
                ]),
                'correct_answer' => json_encode(['Penurunan kesuburan lahan', 'Polutan menetap dalam waktu lama', 'Terganggunya ekosistem tanah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'type' => 'Drag',
                'question' => 'Cocokkan jenis polutan dengan efek lingkungan:',
                'options' => json_encode([
                    'plastik',
                    'pestisida',
                    'logam berat'
                ]),
                'correct_answer' => json_encode([
                    'sulit terurai, mencemari tanah',
                    'menurunkan populasi mikroorganisme tanah',
                    'racun bagi tanaman & air tanah'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa langkah pertama yang dapat dilakukan oleh rumah tangga untuk mengurangi polusi tanah?',
                'options' => json_encode([
                    'Membuang sampah sembarangan',
                    'Memilah sampah menjadi organik dan anorganik',
                    'Membakar sampah plastik',
                    'Menyimpan sampah di rumah tanpa dikelola'
                ]),
                'correct_answer' => json_encode(['Memilah sampah menjadi organik dan anorganik']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Daur ulang sampah plastik di rumah dapat mengurangi jumlah sampah yang mencemari tanah.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa dampak penggunaan pupuk kimia yang berlebihan pada tanah?',
                'options' => json_encode([
                    'Menyuburkan tanah dan meningkatkan hasil pertanian',
                    'Merusak struktur tanah dan mengurangi kesuburannya',
                    'Membuat tanah menjadi lebih kaya akan mikroorganisme',
                    'Tidak mempengaruhi kesuburan tanah'
                ]),
                'correct_answer' => json_encode(['Merusak struktur tanah dan mengurangi kesuburannya']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Penggunaan pupuk organik lebih baik untuk tanah dibandingkan pupuk kimia, karena pupuk organik membantu menjaga keseimbangan tanah.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa yang dimaksud dengan "urban farming" dan bagaimana hal ini dapat membantu mengurangi polusi tanah?',
                'options' => json_encode([
                    'Pertanian yang menggunakan pestisida kimia di daerah perkotaan',
                    'Bertani di area perkotaan menggunakan metode ramah lingkungan yang meningkatkan kualitas tanah',
                    'Memperkenalkan teknik pertanian tradisional yang tidak ramah lingkungan',
                    'Tidak berhubungan dengan pengelolaan tanah'
                ]),
                'correct_answer' => json_encode(['Bertani di area perkotaan menggunakan metode ramah lingkungan yang meningkatkan kualitas tanah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'Checklist',
                'question' => 'Cara mengurangi polusi tanah:',
                'options' => json_encode([
                    'Kurangi pemakaian pestisida',
                    'Daur ulang sampah anorganik',
                    'Buang limbah kimia ke kebun',
                    'Gunakan pupuk organik'
                ]),
                'correct_answer' => json_encode(['Kurangi pemakaian pestisida', 'Daur ulang sampah anorganik', 'Gunakan pupuk organik']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'Checklist',
                'question' => 'Aksi komunitas untuk menjaga tanah:',
                'options' => json_encode([
                    'Aksi bersih TPA atau sungai',
                    'Edukasi pengelolaan sampah',
                    'Bakar plastik di pekarangan',
                    'Komposkan limbah organik'
                ]),
                'correct_answer' => json_encode(['Aksi bersih TPA atau sungai', 'Edukasi pengelolaan sampah', 'Komposkan limbah organik']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'type' => 'Drag',
                'question' => 'Cocokkan solusi dengan manfaatnya:',
                'options' => json_encode([
                    'kompos dari limbah organik',
                    'kurangi pestisida',
                    'daur ulang plastik'
                ]),
                'correct_answer' => json_encode([
                    'kurangi sampah, suburkan tanah',
                    'lindungi mikroorganisme tanah',
                    'cegah penumpukan sampah anorganik'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Apa yang dimaksud dengan polusi udara?',
                'options' => json_encode([
                    'Udara yang bebas dari gas dan partikel',
                    'Udara yang tercampur dengan zat berbahaya yang membahayakan kesehatan',
                    'Udara yang mengandung oksigen murni',
                    'Udara yang dihasilkan oleh tanaman'
                ]),
                'correct_answer' => json_encode(['Udara yang tercampur dengan zat berbahaya yang membahayakan kesehatan']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Polutan mana yang terbentuk dari reaksi antara asap kendaraan dan sinar matahari?',
                'options' => json_encode([
                    'Karbon monoksida (CO)',
                    'Smog fotokimia',
                    'Nitrogen oksida (NOx)',
                    'Ozon troposferik'
                ]),
                'correct_answer' => json_encode(['Smog fotokimia']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Polusi udara hanya berasal dari aktivitas manusia dan tidak dapat terbentuk dari sumber alami.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Salah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Mana yang merupakan contoh sumber polusi udara alami?',
                'options' => json_encode([
                    'Asap kendaraan bermotor',
                    'Letusan gunung berapi',
                    'Pembakaran sampah',
                    'Pembangkit listrik'
                ]),
                'correct_answer' => json_encode(['Letusan gunung berapi']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'PG',
                'question' => 'Polutan apa yang berkontribusi besar terhadap pemanasan global?',
                'options' => json_encode([
                    'Karbon monoksida (CO)',
                    'Metana (CH₄)',
                    'Ozon (O₃)',
                    'Partikulat (PM2.5)'
                ]),
                'correct_answer' => json_encode(['Metana (CH₄)']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'Checklist',
                'question' => 'Aktivitas manusia yang memperburuk kualitas udara:',
                'options' => json_encode([
                    'Pembakaran sampah terbuka',
                    'Kendaraan tanpa uji emisi',
                    'Menggunakan energi surya',
                    'Industri tanpa filter asap'
                ]),
                'correct_answer' => json_encode(['Pembakaran sampah terbuka', 'Kendaraan tanpa uji emisi', 'Industri tanpa filter asap']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'Checklist',
                'question' => 'Dampak lingkungan dari polusi udara:',
                'options' => json_encode([
                    'Hujan asam',
                    'Kerusakan lapisan ozon',
                    'Pemanasan global',
                    'Fotosintesis meningkat'
                ]),
                'correct_answer' => json_encode(['Hujan asam', 'Kerusakan lapisan ozon', 'Pemanasan global']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'type' => 'Drag',
                'question' => 'Cocokkan jenis polutan dengan dampaknya:',
                'options' => json_encode([
                    'karbon dioksida',
                    'sulfur dioksida',
                    'PM2.5'
                ]),
                'correct_answer' => json_encode([
                    'efek rumah kaca & pemanasan global',
                    'hujan asam',
                    'gangguan pernapasan & paru'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Polusi udara dapat menyebabkan masalah kesehatan. Apa dampak utama bagi sistem pernapasan manusia?',
                'options' => json_encode([
                    'Iritasi saluran napas dan asma',
                    'Meningkatnya kekuatan paru-paru',
                    'Meningkatkan daya tahan tubuh',
                    'Tidak ada dampak pada sistem pernapasan'
                ]),
                'correct_answer' => json_encode(['Iritasi saluran napas dan asma']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Polutan seperti karbon monoksida dan sulfur dioksida dapat menyebabkan gangguan pada sistem kardiovaskular, meningkatkan risiko serangan jantung dan stroke.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Mana dari berikut ini yang merupakan efek jangka panjang dari polusi udara terhadap sistem pernapasan?',
                'options' => json_encode([
                    'Meningkatkan kualitas tidur',
                    'Penurunan fungsi paru-paru dan kanker paru',
                    'Meningkatkan daya tahan tubuh',
                    'Menurunkan kadar oksigen dalam tubuh'
                ]),
                'correct_answer' => json_encode(['Penurunan fungsi paru-paru dan kanker paru']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Polusi udara dapat memperburuk penyakit kronis. Penyakit apa yang sering diperburuk akibat paparan polusi udara?',
                'options' => json_encode([
                    'Penyakit jantung',
                    'Diabetes tipe 1',
                    'Osteoporosis',
                    'Hepatitis'
                ]),
                'correct_answer' => json_encode(['Penyakit jantung']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Polusi udara hanya berpengaruh pada individu yang memiliki riwayat penyakit pernapasan seperti asma.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Salah']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'Checklist',
                'question' => 'Gejala kesehatan akibat polusi udara jangka pendek:',
                'options' => json_encode([
                    'Iritasi mata',
                    'Batuk/sesak napas',
                    'Demam berdarah',
                    'Sakit tenggorokan'
                ]),
                'correct_answer' => json_encode(['Iritasi mata', 'Batuk/sesak napas', 'Sakit tenggorokan']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'Checklist',
                'question' => 'Kelompok yang sangat rentan dampak polusi udara:',
                'options' => json_encode([
                    'Anak-anak',
                    'Lansia',
                    'Atlet profesional',
                    'Penderita penyakit kronis'
                ]),
                'correct_answer' => json_encode(['Anak-anak', 'Lansia', 'Penderita penyakit kronis']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'type' => 'Drag',
                'question' => 'Cocokkan sistem tubuh dengan jenis polusinya:',
                'options' => json_encode([
                    'paru-paru',
                    'jantung',
                    'otak'
                ]),
                'correct_answer' => json_encode([
                    'PM2.5',
                    'karbon monoksida',
                    'partikel ultra-halus'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa yang dapat dilakukan oleh individu untuk mengurangi polusi udara di lingkungan sekitar?',
                'options' => json_encode([
                    'Menanam pohon',
                    'Menggunakan kendaraan pribadi lebih sering',
                    'Membuang sampah sembarangan',
                    'Membakar sampah di halaman rumah'
                ]),
                'correct_answer' => json_encode(['Menanam pohon']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Menurunkan penggunaan kendaraan pribadi dan lebih memilih transportasi umum adalah salah satu cara mengurangi polusi udara.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Apa yang dilakukan pemerintah di kota-kota besar untuk mengurangi polusi udara?',
                'options' => json_encode([
                    'Meningkatkan penggunaan kendaraan pribadi',
                    'Menerapkan zona emisi rendah (ULEZ)',
                    'Mengurangi ruang terbuka hijau',
                    'Mengurangi regulasi emisi kendaraan'
                ]),
                'correct_answer' => json_encode(['Menerapkan zona emisi rendah (ULEZ)']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Bagaimana tanaman dapat membantu mengatasi polusi udara?',
                'options' => json_encode([
                    'Menyaring polutan udara dan menghasilkan oksigen',
                    'Menghasilkan bahan kimia berbahaya',
                    'Menyerap gas berbahaya dalam jumlah besar',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => json_encode(['Menyaring polutan udara dan menghasilkan oksigen']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'PG',
                'question' => 'Benar atau Salah: Penggunaan air purifier di dalam rumah dapat membantu meningkatkan kualitas udara dan mengurangi polusi yang kita hirup.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => json_encode(['Benar']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'Checklist',
                'question' => 'Teknologi atau kebijakan untuk udara bersih:',
                'options' => json_encode([
                    'Zona rendah emisi (ULEZ)',
                    'Kendaraan listrik',
                    'Pembakaran terbuka',
                    'Pemantauan AQI'
                ]),
                'correct_answer' => json_encode(['Zona rendah emisi (ULEZ)', 'Kendaraan listrik', 'Pemantauan AQI']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'Checklist',
                'question' => 'Cara individu berkontribusi menjaga udara:',
                'options' => json_encode([
                    'Gunakan transportasi umum',
                    'Menanam pohon',
                    'Bakar sampah rumah tangga',
                    'Edukasi keluarga'
                ]),
                'correct_answer' => json_encode(['Gunakan transportasi umum', 'Menanam pohon', 'Edukasi keluarga']),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'type' => 'Drag',
                'question' => 'Cocokkan kota besar dengan strategi bersih udaranya:',
                'options' => json_encode([
                    'seoul',
                    'london',
                    'jakarta'
                ]),
                'correct_answer' => json_encode([
                    'transformasi ruang hijau',
                    'zona emisi ultra rendah',
                    'integrasi transportasi publik'
                ]),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
