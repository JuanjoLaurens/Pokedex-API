<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class,'register']);
Route::post('login', [UserController::class,'login']);
Route::get('list', [UserController::class,'list']);
Route::get('user/{id}', [UserController::class,'getUser']);
Route::get('user/{id}', [UserController::class,'getUser']);
Route::get('update/{id}/edit', [UserController::class,'edit']);
Route::put('update/{id}', [UserController::class,'update']);



