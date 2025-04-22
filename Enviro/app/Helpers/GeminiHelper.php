<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Http;

class GeminiHelper
{
    public static function chatWithGemini($userInput)
    {
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

        // dd($response->json());
        if ($response->successful()) {
            return $response->json()['candidates'][0]['content']['parts'][0]['text'] ?? 'Tidak ada jawaban.';
        } else {
            return 'Terjadi kesalahan saat menghubungi API.';
        }
    }
}
