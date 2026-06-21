<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/login', 'Login');

Route::inertia('/register', 'Register');