<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\ResetPasswordController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisterController::class, 'store']);
Route::post('/login', [LoginController::class, 'authenticate']);
// Route::get('/user', [UserController::class, 'getUser']);
Route::middleware('auth:sanctum')->post('/logout', [LoginController::class, 'logout']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::post('/profile', [ProfileController::class, 'update']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/email/verify', [RegisterController::class, 'verifyEmail'])->name('verification.notice');
    Route::post('/email/verify', [RegisterController::class, 'resendEmailVerification'])->name('verification.send');
});

Route::get('/verify-email/{id}/{hash}', function (EmailVerificationRequest $request) {
    // Fulfill the email verification
    $request->fulfill();

    // Return a response (you can customize this response)
    return response()->json(['message' => 'Email verified successfully.'], 200);
})->name('verification.verify')->middleware(['auth:sanctum', 'signed']);

Route::post('/reset-password', [ResetPasswordController::class, 'sendResetLink']);
Route::post('/reset-password/confirm', [ResetPasswordController::class, 'resetPassword']);
