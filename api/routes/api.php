<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CommandController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::apiResources([
    'user' => UserController::class,
    'product' => ProductController::class,
    'cart' => CartController::class,
    'command' => CommandController::class
]);
