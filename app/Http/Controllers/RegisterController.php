<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;



class RegisterController extends Controller
{
    public function RegisterUser(Request $request) 
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:users',
            'name' => 'required|string|min:4|max:20',
            'password' => 'required|string|min:8|confirmed'
         ]);

         User::create($validated);

         return redirect('/login');

    }
}
