<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {
        $validatedData = $request->validate([
            'account' => 'required|email:dns|string|max:255',
            'password' => 'required|string',
        ]);

        // Menggunakan Auth::attempt untuk autentikasi dengan email dan password
        if (!Auth::attempt(['email' => $validatedData['account'], 'password' => $validatedData['password']])) {
            // Mengembalikan respons dengan status 401 jika login gagal
            return response()->json(['message' => 'Email atau Password salah'], 401);
        }

        // Jika login berhasil, buat token API dengan Sanctum
        $user = User::where('email', $validatedData['account'])->first();
        $token = $user->createToken('spa-token')->plainTextToken;

        // Simpan token di cookie dengan HttpOnly dan Secure flag
        $cookie = cookie('auth_token', $token, 60 * 24, null, null, secure: true, httpOnly: false, raw: false, sameSite: 'None'); // SameSite=None

        // Mengembalikan response dengan token dan cookie
        return response()->json([
            'user' => $user,
        ])->withCookie($cookie);  // Kirim cookie bersama dengan response
    }

    public function logout(Request $request)
    {
        // Menghancurkan token pengguna saat logout
        Auth::user()->tokens->each(function ($token) {
            $token->delete();
        });

        // Hapus cookie yang menyimpan token
        $cookie = cookie('auth_token', '', -1);  // Menghapus cookie dengan setting waktu kedaluwarsa negatif

        return response()->json(['message' => 'Logout successful.'])->withCookie($cookie);
    }
}
