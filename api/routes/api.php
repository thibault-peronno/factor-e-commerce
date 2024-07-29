<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CommandController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RetireProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

use Illuminate\Support\Facades\Log;

// Log::info('Requête reçue', ['url' => request()->path(), 'method' => request()->method()]);


Route::apiResources([
    'user' => UserController::class,
    'product' => ProductController::class,
    'cart' => CartController::class,
    'command' => CommandController::class
]);

Route::get('/retireProduct', [RetireProductController::class, 'getRetireProduct']);
Route::get('/quantityByProduct', [CartController::class, 'getQuantityByProduct']);
