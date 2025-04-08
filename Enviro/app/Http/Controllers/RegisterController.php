<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Log;


class RegisterController extends Controller
{
    public function store(Request $request)
    {
        // Validasi inputan pengguna
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email:dns|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'birth_date' => 'required|date',
        ]);

        // Jika validasi gagal
        if ($validator->fails()) {
            Log::error($validator->errors());
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Buat pengguna baru
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'birth_date' => $request->birth_date,
        ]);

        // Autentikasi pengguna setelah registrasi
        Auth::login($user);
        $request->session()->regenerate();

        // Buat token API untuk pengguna
        // $token = $user->createToken('spa-token')->plainTextToken;

        // Simpan token di cookie dengan HttpOnly dan Secure flag
        // $cookie = cookie('auth_token', $token, 60 * 24, null, null, secure: true, httpOnly: false, raw: false, sameSite: 'None'); // SameSite=None

        // Mengembalikan response dengan data pengguna dan token, serta cookie
        return response()->json([
            'user' => $user,
        ]);
    }

    public function verifyEmail()
    {
        $user = Auth::user();
        if ($user && is_null($user->email_verified_at)) {
            event(new Registered($user));
        } else {
            return redirect()->intended('/');
        }
    }

    public function emailVerificationHandler(EmailVerificationRequest $request)
    {
        $request->fulfill();
    }

    public function resendEmailVerification(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        return redirect()->to(url()->current())->with('message', 'Tautan verifikasi telah dikirim!');
    }
}
