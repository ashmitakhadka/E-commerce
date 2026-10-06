<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
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
       $laptopCategory = Category::where('name', 'Laptops')->firstOrFail();
$smartphoneCategory = Category::where('name', 'Smartphones')->firstOrFail();
$audioCategory = Category::where('name', 'Audio')->firstOrFail();
$gamingCategory = Category::where('name', 'Gaming')->firstOrFail();

$now = now();
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

       $products = [
        [
    'name' => 'MacBook Air M3',
    'category_id' => $laptopCategory->id,
    'description' => 'Lightweight laptop powered by the Apple M3 chip, designed for work, study, and everyday productivity.',
    'stock' => 10,
    'price' => 1099.99,
    'image' => 'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'HP Pavilion 15',
    'category_id' => $laptopCategory->id,
    'description' => 'Versatile 15-inch laptop suitable for everyday work, study, browsing, and entertainment.',
    'stock' => 14,
    'price' => 699.99,
    'image' => 'https://images.pexels.com/photos/5721824/pexels-photo-5721824.jpeg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Lenovo IdeaPad Slim 5',
    'category_id' => $laptopCategory->id,
    'description' => 'Slim and practical laptop designed for productivity, study, and everyday computing.',
    'stock' => 11,
    'price' => 649.99,
    'image' => 'https://www.presse-citron.net/app/uploads/2024/11/Lenovo-IdeaPad-Slim-5-16IAH8.jpg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'ASUS VivoBook 15',
    'category_id' => $laptopCategory->id,
    'description' => 'Modern 15-inch laptop offering a comfortable balance of performance, portability, and productivity.',
    'stock' => 13,
    'price' => 679.99,
    'image' => 'https://ak-asset.jarir.com/akeneo-prod/asset/4/b/0/e/4b0e1572763b028adaa785560c43f173463822a4_614331.jpg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'iPhone 16',
    'category_id' => $smartphoneCategory->id,
    'description' => 'Modern Apple smartphone with a powerful processor, advanced camera system, and vibrant display.',
    'stock' => 18,
    'price' => 899.99,
    'image' => 'https://matshop.com.pe/wp-content/uploads/2026/09/iphone-16.png',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Samsung Galaxy S25',
    'category_id' => $smartphoneCategory->id,
    'description' => 'Premium Samsung smartphone with a high-quality display, powerful performance, and advanced cameras.',
    'stock' => 16,
    'price' => 849.99,
    'image' => 'https://scr.wfcdn.de/28444/Samsung-Galaxy-S25-1726212968-0-0.jpg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Google Pixel 9',
    'category_id' => $smartphoneCategory->id,
    'description' => 'Google smartphone featuring an excellent camera system, smooth performance, and a clean Android experience.',
    'stock' => 12,
    'price' => 799.99,
    'image' => 'https://images.unsplash.com/photo-1727132527153-683df2c70cd6?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'OnePlus 13',
    'category_id' => $smartphoneCategory->id,
    'description' => 'High-performance Android smartphone with a premium design, powerful processor, and fast charging.',
    'stock' => 15,
    'price' => 749.99,
    'image' => 'https://images.unsplash.com/photo-1757847505239-ce2fb51da67d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Xiaomi 15',
    'category_id' => $smartphoneCategory->id,
    'description' => 'Feature-rich smartphone offering strong performance, an advanced camera system, and a premium display.',
    'stock' => 17,
    'price' => 699.99,
    'image' => 'https://images.unsplash.com/photo-1774070150575-719b13072230?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Apple AirPods Pro',
    'category_id' => $audioCategory->id,
    'description' => 'Wireless earbuds with active noise cancellation, immersive sound, and a compact charging case.',
    'stock' => 25,
    'price' => 249.99,
    'image' => 'https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'JBL Flip 6',
    'category_id' => $audioCategory->id,
    'description' => 'Portable Bluetooth speaker designed to deliver powerful sound for music and entertainment.',
    'stock' => 20,
    'price' => 129.99,
    'image' => 'https://images.unsplash.com/photo-1561930661-20c9650e3e25?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Bose QuietComfort',
    'category_id' => $audioCategory->id,
    'description' => 'Comfortable wireless headphones featuring noise cancellation and high-quality audio for everyday listening.',
    'stock' => 14,
    'price' => 299.99,
    'image' => 'https://images.unsplash.com/photo-1565935192924-21a9ddca26eb?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Sony WF-1000XM5',
    'category_id' => $audioCategory->id,
    'description' => 'Premium wireless earbuds with noise cancellation, detailed sound, and a compact design.',
    'stock' => 19,
    'price' => 279.99,
    'image' => 'https://m.media-amazon.com/images/I/61YgQ4faTaL._AC_SL1500_.jpg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Logitech G Pro Mouse',
    'category_id' => $gamingCategory->id,
    'description' => 'Lightweight gaming mouse designed for competitive gaming with precise tracking and responsive controls.',
    'stock' => 24,
    'price' => 119.99,
    'image' => 'https://images.unsplash.com/photo-1620332326645-483a1c17550a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Razer BlackWidow Keyboard',
    'category_id' => $gamingCategory->id,
    'description' => 'Mechanical gaming keyboard designed for responsive gameplay with customizable controls and lighting.',
    'stock' => 18,
    'price' => 139.99,
    'image' => 'https://m.media-amazon.com/images/I/815XJdl7fXL.jpg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'PlayStation 5 Controller',
    'category_id' => $gamingCategory->id,
    'description' => 'Wireless gaming controller designed for PlayStation 5 with immersive feedback and responsive controls.',
    'stock' => 21,
    'price' => 69.99,
    'image' => 'https://gmedia.playstation.com/is/image/SIEPDC/dualsense-thumbnail-ps5-01-en-17jul20?$native$',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'Xbox Wireless Controller',
    'category_id' => $gamingCategory->id,
    'description' => 'Wireless controller with comfortable ergonomics and responsive controls for console and PC gaming.',
    'stock' => 20,
    'price' => 59.99,
    'image' => 'https://m.media-amazon.com/images/I/615KnbjRmTL._SL1500_.jpg',
    'created_at' => $now,
    'updated_at' => $now,
],

[
    'name' => 'HyperX Gaming Headset',
    'category_id' => $gamingCategory->id,
    'description' => 'Gaming headset with immersive audio, a clear microphone, and comfortable ear cushions for long gaming sessions.',
    'stock' => 16,
    'price' => 89.99,
    'image' => 'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_ii_wireless_6_accessories_2048x2048.jpg?v=1662449689',
    'created_at' => $now,
    'updated_at' => $now,
],
       ];
       DB::table('products')->insert($products);
    }
}
