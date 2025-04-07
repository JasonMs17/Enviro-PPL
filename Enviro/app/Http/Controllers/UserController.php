<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        // Mengambil user yang sedang login
        $user = Auth::user();

        // Cek jika user tidak ada, kirimkan pesan error
        if (!$user) {
            return response()->json(['message' => 'Invalid token or no user found'], 401);
        }

        // Mengembalikan data user yang terautentikasi
        return response()->json($user);
    }
}
