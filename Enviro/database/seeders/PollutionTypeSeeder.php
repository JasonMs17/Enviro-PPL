<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PollutionTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pollution_types')->insert([
            [
                'name' => 'Polusi Air',
                'description' => 'Pencemaran pada air akibat limbah industri, rumah tangga, atau pertanian.',
                'photo' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1748086830/Polusi_Air_nswaji.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Polusi Udara',
                'description' => 'Pencemaran udara akibat emisi kendaraan, industri, atau pembakaran bahan bakar fosil.',
                'photo' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1748086831/Polusi_Udara_sgvrmy.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Polusi Tanah',
                'description' => 'Pencemaran tanah karena limbah berbahaya, penggunaan pestisida berlebihan, atau penimbunan sampah sembarangan.',
                'photo' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1748086833/Polusi_Tanah_j4akm6.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
