<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function products(){
        return Product::all();
    }

    public function storeProducts(Request $request){
      $request->validate([
       
    'category_id' => ['required', 'integer', 'exists:categories,id'],
    'name'        => ['required', 'string', 'max:255'],
    'description' => ['nullable', 'string'],
    'stock'       => ['required', 'integer', 'min:0'],
    'price'       => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'],
    'image'       => ['nullable'],
  ]);

      $products= Product::create([
        'category_id'=> $request->category_id,
           'description'=>$request->description,
            'name'=>$request->name,
            'stock'=>$request->stock,
            'price'=> $request->price,
            'image'=> $request->image,
      ]);

      return response()->json($products);
    }

    public function getProduct($id){
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    public function updateProduct(Request $request, $id){
        $request->validate([
        'category_id' => ['required', 'integer', 'exists:categories,id'],
        'name'        => ['required', 'string', 'max:255'],
        'description' => ['nullable', 'string'],
        'stock'       => ['required', 'integer', 'min:0'],
        'price'       => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'],
        'image'       => ['nullable'],
     ]);

     $product = Product::findOrFail($id);
     $product->update([
        'category_id'=> $request->category_id,
           'description'=>$request->description,
            'name'=>$request->name,
            'stock'=>$request->stock,
            'price'=> $request->price,
            'image'=> $request->image,
     ]);
     return response()->json([
    'message' => 'Updated Successfully',
    'product' => $product,
]);
}

public function deleteProduct($id){
    $product = Product::findOrFail($id);
    $product->delete();

    return response()->json([
        "message"=> "Deleted Successfully",
        "product"=> $product,
    ]);
}
}