<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    /**
     * Send the password reset link to the user's email.
     */
    public function sendResetLink(Request $request)
    {
        // Validate email input
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        // Attempt to send the reset link
        $response = Password::sendResetLink(
            $request->only('email')
        );

        // Return success or failure response
        if ($response == Password::RESET_LINK_SENT) {
            return response()->json(['message' => 'Link reset password telah dikirim ke email.'], 200);
        }

        return response()->json(['message' => Lang::get($response)], 422);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email|exists:users,email',
            'password' => 'required|confirmed|min:8',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password),
                    'remember_token' => Str::random(60),
                ])->save();
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response()->json(['message' => 'Password berhasil diubah.']);
        }

        return response()->json(['message' => __($status)], 422);
    }
}
