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
                'photo' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1745670863/Canal-pollution_ggzv6k.webp',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Polusi Udara',
                'description' => 'Pencemaran udara akibat emisi kendaraan, industri, atau pembakaran bahan bakar fosil.',
                'photo' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1745670863/Air_pollution_by_industrial_chimneys_mzmdwz.webp',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Polusi Tanah',
                'description' => 'Pencemaran tanah karena limbah berbahaya, penggunaan pestisida berlebihan, atau penimbunan sampah sembarangan.',
                'photo' => 'https://res.cloudinary.com/dwtrypmzg/image/upload/v1745670864/Pencemaran-Sumber-Air_baoxso.webp',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
