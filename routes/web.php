<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RegisterController;


Route::inertia('/', 'welcome')->name('home');
Route::inertia('/login', 'Login');
Route::inertia('/register', 'Register');

Route::post('registerUser', [RegisterController::class, "RegisterUser"]);