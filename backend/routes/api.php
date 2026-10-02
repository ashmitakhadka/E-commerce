<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function () {
    return response()->json([
        'message' => 'Laravel API is working!',
    ]);
});

//CATEGORIES API
  Route::get('/categories', [CategoryController::class, 'index']);
  Route::post('/categories', [CategoryController::class, 'store']);
  Route::get('/categories/{id}', [CategoryController::class, 'show']);
  Route::patch('/categories/{id}', [CategoryController::class, 'edit']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

// PRODUCTS API
  Route::get('/products', [ProductController::class, 'products']);
   Route::post('/products', [ProductController::class, 'storeProducts']);
   Route::get('/products/{id}', [ProductController::class, 'getProduct']);
   Route::patch('/products/{id}', [ProductController::class, 'updateProduct']);
    Route::delete('/products/{id}', [ProductController::class, 'deleteProduct']);
      