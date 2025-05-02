<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function kirimChat(Request $request)
    {
        $pesan = $request->input('pesan');
        $history = $request->input('history', []); // Terima riwayat percakapan sebagai array
        $apiKey = env('GROQ_API_KEY'); // Ambil API key dari .env

        // Tambahkan pesan pengguna saat ini ke dalam riwayat
        $messages = [...$history, ['role' => 'user', 'content' => $pesan]];

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://api.groq.com/openai/v1/chat/completions",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode([
                'messages' => $messages, // Kirim seluruh riwayat percakapan
                'model' => 'llama-3.3-70b-versatile',
            ]),
            CURLOPT_HTTPHEADER => [
                "Authorization: Bearer " . $apiKey,
                "Content-Type: application/json"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            // Handle error
            return response()->json(['error' => 'cURL Error: ' . $err], 500);
        } else {
            $responseData = json_decode($response, true);
            $balasan = $responseData['choices'][0]['message']['content'] ?? 'Tidak ada balasan.';

            // Sertakan juga pesan asisten dalam respons untuk memperbarui riwayat di sisi klien
            return response()->json(['balasan' => $balasan, 'history' => [...$messages, ['role' => 'assistant', 'content' => $balasan]]]);
        }
    }
}
