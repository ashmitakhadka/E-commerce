<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $laptopCategory = Category::where('name', 'Laptops')->first();
        $audioCategory = Category::where('name', 'Audio')->first();
       Product::create([
          "name"=> "Dell Inspiron 15",
           'category_id' => $laptopCategory->id,
          "description"=> "15-inch laptop designed for everyday work, study, browsing, and entertainment.",
          "stock"=>12,
          "price"=> 749.99,
          "image"=> "https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       ]);
        Product::create([
          "name"=> "Sony WH-1000XM5",
           "category_id"=> $audioCategory->id,
          "description"=> "Wireless noise-cancelling headphones with high-quality sound and long battery life.",
          "stock"=>22,
          "price"=> 349.99,
          "image"=> "https://images.unsplash.com/photo-1621208587196-0b2a7d2aeb03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       ]);
    }
}
