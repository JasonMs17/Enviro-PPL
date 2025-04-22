<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController; // Pastikan namespace controller Anda benar

Route::get('/chatbot', function () {
    return view('chatbot');
});

// Rute API Anda sudah ada di api.php:
// Route::post('/chat', [ChatController::class, 'kirimChat']);
Route::post('/chat', [ChatController::class, 'kirimChat']);
