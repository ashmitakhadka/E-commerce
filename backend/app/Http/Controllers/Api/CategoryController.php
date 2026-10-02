<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
   public function index()
{
    return Category::all();
}

  public function store(Request $request){

  $request->validate([
    'name'=> "required",
    'description' => 'nullable',
  ]);
    $category= Category::create([
        'name'=> $request->name,
        'description'=> $request->description,
    ]);

    return response()->json($category);
  }

  public function show($id)
{
    $category = Category::findOrFail($id);

    $category->load('products');

    return response()->json($category);
}
  public function edit(Request $request, $id){
    $request->validate([
    'name'=> "required",
    'description' => 'nullable',
  ]);

  $category = Category::findOrFail($id);
  $category->update([
      'name'=> $request->name,
        'description'=> $request->description,
  ]);

  return response()->json($category);
  }

  public function destroy($id){
     $category = Category::findOrFail($id);
     $category->delete();
      return response()->json("Category deleted successfully");
  }
}