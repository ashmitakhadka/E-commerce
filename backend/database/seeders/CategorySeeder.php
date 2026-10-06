<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
    'name' => 'Laptops',
    'description' => 'Laptops for work, study, and entertainment',

]);
Category::create([
    'name' => 'Smartphones',
    'description' => 'Modern smartphones for everyday use, communication, and entertainment',
]);

Category::create([
    'name' => 'Audio',
    'description' => 'Headphones, earbuds, and speakers for music and entertainment',
]);

Category::create([
    'name' => 'Gaming',
    'description' => 'Gaming peripherals and accessories for an immersive gaming experience',
]);
    }
}
