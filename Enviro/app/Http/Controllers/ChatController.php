<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function kirimChat(Request $request)
    {
        $userInput = $request->input('pesan');
        $apiKey = env('GEMINI_API_KEY');
        $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={$apiKey}";

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post($url, [
            'contents' => [
                [
                    'role' => 'user',
                    'parts' => [
                        ['text' => $userInput]
                    ]
                ]
            ]
        ]);

        if ($response->successful()) {
            $jawaban = $response->json()['candidates'][0]['content']['parts'][0]['text'] ?? 'Tidak ada jawaban.';
        } else {
            $jawaban = 'Terjadi kesalahan saat menghubungi API.';
        }

        return response()->json(['balasan' => $jawaban]);
    }
}
