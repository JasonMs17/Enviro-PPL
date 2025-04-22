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
                'question' => 'Apa yang dimaksud dengan polusi air?',
                'options' => json_encode([
                    'Ketika air tercemar oleh zat-zat berbahaya akibat aktivitas manusia',
                    'Air yang digunakan untuk kebutuhan industri',
                    'Proses pemurnian air',
                    'Air yang digunakan untuk keperluan pertanian'
                ]),
                'correct_answer' => 'Ketika air tercemar oleh zat-zat berbahaya akibat aktivitas manusia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'question' => 'Mana dari ciri-ciri berikut yang menunjukkan bahwa air tercemar?',
                'options' => json_encode([
                    'Tidak ada rasa atau bau',
                    'Munculnya endapan atau zat terlarut',
                    'Air yang bening',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Munculnya endapan atau zat terlarut',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'question' => 'Benar atau Salah: Polusi air terjadi ketika kualitas air menurun hingga tidak lagi layak untuk digunakan dalam kehidupan manusia, pertanian, atau menjaga ekosistem air tetap seimbang.',
                'options' => json_encode([
                    'Benar',
                    'Salah'
                ]),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'question' => 'Apa yang dimaksud dengan pencemaran mikrobiologis?',
                'options' => json_encode([
                    'Pencemaran akibat bakteri, virus, atau parasit berbahaya',
                    'Pencemaran akibat limbah industri',
                    'Pencemaran akibat suhu air yang tinggi',
                    'Pencemaran akibat pupuk berlebihan'
                ]),
                'correct_answer' => 'Pencemaran akibat bakteri, virus, atau parasit berbahaya',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 1,
                'question' => 'Apa dampak utama dari pencemaran air terhadap ekosistem air?',
                'options' => json_encode([
                    'Keanekaragaman hayati menurun',
                    'Terjadinya ledakan alga yang tidak terkendali',
                    'Rantai makanan terganggu',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Semua jawaban benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'question' => 'Apa penyakit yang paling sering muncul akibat pencemaran air?',
                'options' => json_encode([
                    'Kanker kulit',
                    'Diare',
                    'Penyakit jantung',
                    'Hepatitis B'
                ]),
                'correct_answer' => 'Diare',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'question' => 'Benar atau Salah: Kolera disebabkan oleh bakteri Vibrio cholerae yang menyebar melalui air yang terkontaminasi.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'question' => 'Siapa yang paling rentan terkena dampak pencemaran air?',
                'options' => json_encode([
                    'Anak-anak saja',
                    'Orang dewasa saja',
                    'Lansia saja',
                    'Anak-anak dan lansia'
                ]),
                'correct_answer' => 'Anak-anak dan lansia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'question' => 'Apa dampak kesehatan jangka panjang dari mengonsumsi air yang terkontaminasi logam berat seperti arsenik?',
                'options' => json_encode([
                    'Meningkatkan risiko penyakit jantung',
                    'Meningkatkan risiko kanker',
                    'Menurunkan daya tahan tubuh',
                    'Mengurangi kadar oksigen dalam darah'
                ]),
                'correct_answer' => 'Meningkatkan risiko kanker',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'question' => 'Benar atau Salah: Air yang tampak jernih selalu aman untuk dikonsumsi.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Salah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 2,
                'question' => 'Apa dampak utama dari pencemaran air terhadap ekosistem air?',
                'options' => json_encode([
                    'Keanekaragaman hayati menurun',
                    'Terjadinya ledakan alga yang tidak terkendali',
                    'Rantai makanan terganggu',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Semua jawaban benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'question' => 'Apa yang harus dilakukan pertama kali dalam pengolahan air limbah?',
                'options' => json_encode([
                    'Penyaringan kasar untuk memisahkan sampah besar',
                    'Disinfeksi dengan klorin',
                    'Pengolahan biologis dengan lumpur aktif',
                    'Pengendapan sekunder'
                ]),
                'correct_answer' => 'Penyaringan kasar untuk memisahkan sampah besar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'question' => 'Apa yang dapat dilakukan untuk mengurangi polusi air dari rumah tangga?',
                'options' => json_encode([
                    'Membuang minyak bekas ke saluran air',
                    'Menggunakan deterjen ramah lingkungan',
                    'Meningkatkan penggunaan plastik sekali pakai',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Menggunakan deterjen ramah lingkungan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'question' => 'Benar atau Salah: Salah satu cara menjaga kualitas air adalah dengan tidak membuang sampah ke sungai atau saluran air.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'question' => 'Apa solusi untuk menghemat penggunaan air secara bijak di rumah?',
                'options' => json_encode([
                    'Mandi menggunakan shower biasa',
                    'Memperbaiki kebocoran pipa',
                    'Membiarkan keran menyala saat tidak digunakan',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Memperbaiki kebocoran pipa',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 1,
                'sub_bab' => 3,
                'question' => 'Apa yang dapat dilakukan untuk menjaga sumber air alami tetap bersih dan aman?',
                'options' => json_encode([
                    'Tanam pohon di sekitar sumber air',
                    'Buang sampah ke sungai untuk mengurangi polusi',
                    'Tidak perlu memantau kualitas air secara berkala',
                    'Meningkatkan penggunaan bahan kimia di sekitar sumber air'
                ]),
                'correct_answer' => 'Tanam pohon di sekitar sumber air',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'question' => 'Apa yang dimaksud dengan polusi tanah?',
                'options' => json_encode([
                    'Proses alami yang menyebabkan perubahan tanah',
                    'Keadaan tanah yang tercemar oleh zat berbahaya, terutama bahan kimia buatan manusia',
                    'Proses pengolahan tanah untuk pertanian',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Keadaan tanah yang tercemar oleh zat berbahaya, terutama bahan kimia buatan manusia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'question' => 'Polusi tanah bisa terjadi pada dua lapisan utama tanah. Lapisan manakah yang biasanya tercemar karena pembuangan sampah dan limbah padat?',
                'options' => json_encode([
                    'Lapisan permukaan tanah',
                    'Lapisan bawah tanah',
                    'Lapisan subsoil',
                    'Lapisan udara'
                ]),
                'correct_answer' => 'Lapisan permukaan tanah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'question' => 'Benar atau Salah: Polusi tanah hanya terjadi di area perkotaan yang padat penduduk.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Salah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'question' => 'Apa yang menjadi penyebab utama polusi tanah di daerah perkotaan?',
                'options' => json_encode([
                    'Kebocoran limbah cair dari pabrik',
                    'Tumpahan bahan kimia dari kendaraan',
                    'Pembuangan sampah sembarangan dan limbah rumah tangga',
                    'Penggunaan pupuk organik'
                ]),
                'correct_answer' => 'Pembuangan sampah sembarangan dan limbah rumah tangga',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 1,
                'question' => 'Apa salah satu contoh polutan yang sering ditemukan di tanah akibat aktivitas industri?',
                'options' => json_encode([
                    'Oksigen',
                    'Karbon dioksida',
                    'Timbal dan merkuri',
                    'Nitrogen oksida'
                ]),
                'correct_answer' => 'Timbal dan merkuri',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'question' => 'Timbal adalah logam berat yang sering ditemukan di tanah tercemar. Apa yang bisa terjadi jika tubuh terpapar timbal secara terus-menerus?',
                'options' => json_encode([
                    'Meningkatkan daya tahan tubuh',
                    'Mengganggu sistem saraf dan ginjal',
                    'Meningkatkan kecerdasan',
                    'Membantu pertumbuhan rambut'
                ]),
                'correct_answer' => 'Mengganggu sistem saraf dan ginjal',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'question' => 'Benar atau Salah: Arsenik adalah bahan kimia yang dapat menyebabkan kanker pada manusia jika terpapar dalam jangka panjang melalui tanah yang tercemar.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'question' => 'Bagaimana polusi tanah yang mengandung merkuri dapat memengaruhi kesehatan manusia?',
                'options' => json_encode([
                    'Meningkatkan kekebalan tubuh',
                    'Menyebabkan kerusakan pada sistem saraf dan ginjal',
                    'Membantu proses pencernaan',
                    'Meningkatkan kesehatan paru-paru'
                ]),
                'correct_answer' => 'Menyebabkan kerusakan pada sistem saraf dan ginjal',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'question' => 'Polusi tanah yang mengandung logam berat dapat menyebabkan gangguan sistem saraf. Apa gejala yang dapat timbul akibat paparan jangka panjang?',
                'options' => json_encode([
                    'Peningkatan daya ingat',
                    'Gangguan koordinasi dan kesulitan belajar pada anak-anak',
                    'Meningkatkan kemampuan motorik',
                    'Peningkatan penglihatan'
                ]),
                'correct_answer' => 'Gangguan koordinasi dan kesulitan belajar pada anak-anak',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 2,
                'question' => 'Sayuran dan buah yang tumbuh di tanah tercemar dapat mengandung zat berbahaya. Apa dampaknya bagi manusia yang mengonsumsinya?',
                'options' => json_encode([
                    'Menyebabkan kerusakan pada organ tubuh dan meningkatkan risiko kanker',
                    'Tidak ada dampak, karena polutan hanya memengaruhi tanaman',
                    'Meningkatkan kekebalan tubuh',
                    'Tidak mempengaruhi kesehatan manusia'
                ]),
                'correct_answer' => 'Menyebabkan kerusakan pada organ tubuh dan meningkatkan risiko kanker',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'question' => 'Apa langkah pertama yang dapat dilakukan oleh rumah tangga untuk mengurangi polusi tanah?',
                'options' => json_encode([
                    'Membuang sampah sembarangan',
                    'Memilah sampah menjadi organik dan anorganik',
                    'Membakar sampah plastik',
                    'Menyimpan sampah di rumah tanpa dikelola'
                ]),
                'correct_answer' => 'Memilah sampah menjadi organik dan anorganik',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'question' => 'Benar atau Salah: Daur ulang sampah plastik di rumah dapat mengurangi jumlah sampah yang mencemari tanah.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'question' => 'Apa dampak penggunaan pupuk kimia yang berlebihan pada tanah?',
                'options' => json_encode([
                    'Menyuburkan tanah dan meningkatkan hasil pertanian',
                    'Merusak struktur tanah dan mengurangi kesuburannya',
                    'Membuat tanah menjadi lebih kaya akan mikroorganisme',
                    'Tidak mempengaruhi kesuburan tanah'
                ]),
                'correct_answer' => 'Merusak struktur tanah dan mengurangi kesuburannya',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'question' => 'Benar atau Salah: Penggunaan pupuk organik lebih baik untuk tanah dibandingkan pupuk kimia, karena pupuk organik membantu menjaga keseimbangan tanah.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 3,
                'sub_bab' => 3,
                'question' => 'Apa yang dimaksud dengan "urban farming" dan bagaimana hal ini dapat membantu mengurangi polusi tanah?',
                'options' => json_encode([
                    'Pertanian yang menggunakan pestisida kimia di daerah perkotaan',
                    'Bertani di area perkotaan menggunakan metode ramah lingkungan yang meningkatkan kualitas tanah',
                    'Memperkenalkan teknik pertanian tradisional yang tidak ramah lingkungan',
                    'Tidak berhubungan dengan pengelolaan tanah'
                ]),
                'correct_answer' => 'Bertani di area perkotaan menggunakan metode ramah lingkungan yang meningkatkan kualitas tanah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'question' => 'Apa yang dimaksud dengan polusi udara?',
                'options' => json_encode([
                    'Udara yang bebas dari gas dan partikel',
                    'Udara yang tercampur dengan zat berbahaya yang membahayakan kesehatan',
                    'Udara yang mengandung oksigen murni',
                    'Udara yang dihasilkan oleh tanaman'
                ]),
                'correct_answer' => 'Udara yang tercampur dengan zat berbahaya yang membahayakan kesehatan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'question' => 'Polutan mana yang terbentuk dari reaksi antara asap kendaraan dan sinar matahari?',
                'options' => json_encode([
                    'Karbon monoksida (CO)',
                    'Smog fotokimia',
                    'Nitrogen oksida (NOx)',
                    'Ozon troposferik'
                ]),
                'correct_answer' => 'Smog fotokimia',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'question' => 'Benar atau Salah: Polusi udara hanya berasal dari aktivitas manusia dan tidak dapat terbentuk dari sumber alami.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Salah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'question' => 'Mana yang merupakan contoh sumber polusi udara alami?',
                'options' => json_encode([
                    'Asap kendaraan bermotor',
                    'Letusan gunung berapi',
                    'Pembakaran sampah',
                    'Pembangkit listrik'
                ]),
                'correct_answer' => 'Letusan gunung berapi',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 1,
                'question' => 'Polutan apa yang berkontribusi besar terhadap pemanasan global?',
                'options' => json_encode([
                    'Karbon monoksida (CO)',
                    'Metana (CH₄)',
                    'Ozon (O₃)',
                    'Partikulat (PM2.5)'
                ]),
                'correct_answer' => 'Metana (CH₄)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'question' => 'Polusi udara dapat menyebabkan masalah kesehatan. Apa dampak utama bagi sistem pernapasan manusia?',
                'options' => json_encode([
                    'Iritasi saluran napas dan asma',
                    'Meningkatnya kekuatan paru-paru',
                    'Meningkatkan daya tahan tubuh',
                    'Tidak ada dampak pada sistem pernapasan'
                ]),
                'correct_answer' => 'Iritasi saluran napas dan asma',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'question' => 'Benar atau Salah: Polutan seperti karbon monoksida dan sulfur dioksida dapat menyebabkan gangguan pada sistem kardiovaskular, meningkatkan risiko serangan jantung dan stroke.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'question' => 'Mana dari berikut ini yang merupakan efek jangka panjang dari polusi udara terhadap sistem pernapasan?',
                'options' => json_encode([
                    'Meningkatkan kualitas tidur',
                    'Penurunan fungsi paru-paru dan kanker paru',
                    'Meningkatkan daya tahan tubuh',
                    'Menurunkan kadar oksigen dalam tubuh'
                ]),
                'correct_answer' => 'Penurunan fungsi paru-paru dan kanker paru',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'question' => 'Polusi udara dapat memperburuk penyakit kronis. Penyakit apa yang sering diperburuk akibat paparan polusi udara?',
                'options' => json_encode([
                    'Penyakit jantung',
                    'Diabetes tipe 1',
                    'Osteoporosis',
                    'Hepatitis'
                ]),
                'correct_answer' => 'Penyakit jantung',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 2,
                'question' => 'Benar atau Salah: Polusi udara hanya berpengaruh pada individu yang memiliki riwayat penyakit pernapasan seperti asma.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Salah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'question' => 'Apa yang dapat dilakukan oleh individu untuk mengurangi polusi udara di lingkungan sekitar?',
                'options' => json_encode([
                    'Menanam pohon',
                    'Menggunakan kendaraan pribadi lebih sering',
                    'Membuang sampah sembarangan',
                    'Membakar sampah di halaman rumah'
                ]),
                'correct_answer' => 'Menanam pohon',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'question' => 'Benar atau Salah: Menurunkan penggunaan kendaraan pribadi dan lebih memilih transportasi umum adalah salah satu cara mengurangi polusi udara.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'question' => 'Apa yang dilakukan pemerintah di kota-kota besar untuk mengurangi polusi udara?',
                'options' => json_encode([
                    'Meningkatkan penggunaan kendaraan pribadi',
                    'Menerapkan zona emisi rendah (ULEZ)',
                    'Mengurangi ruang terbuka hijau',
                    'Mengurangi regulasi emisi kendaraan'
                ]),
                'correct_answer' => 'Menerapkan zona emisi rendah (ULEZ)',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'question' => 'Bagaimana tanaman dapat membantu mengatasi polusi udara?',
                'options' => json_encode([
                    'Menyaring polutan udara dan menghasilkan oksigen',
                    'Menghasilkan bahan kimia berbahaya',
                    'Menyerap gas berbahaya dalam jumlah besar',
                    'Semua jawaban benar'
                ]),
                'correct_answer' => 'Menyaring polutan udara dan menghasilkan oksigen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'pollution_type_id' => 2,
                'sub_bab' => 3,
                'question' => 'Benar atau Salah: Penggunaan air purifier di dalam rumah dapat membantu meningkatkan kualitas udara dan mengurangi polusi yang kita hirup.',
                'options' => json_encode(['Benar', 'Salah']),
                'correct_answer' => 'Benar',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
