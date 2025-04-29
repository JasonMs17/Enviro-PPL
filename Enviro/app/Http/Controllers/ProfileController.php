<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Exception;
use Illuminate\Support\Facades\Log;

class ProfileController extends Controller
{
    public function show()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        return response()->json($user);
    }

    public function update(Request $request)
    {
        try {
            /** @var \App\Models\User $user */
            $user = Auth::user();
    
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'profile_photo' => 'nullable|image|max:2048',
            ]);
    
            $user->name = $validated['name'];

            // Hapus foto lama di Cloudinary jika ada
            if ($request->hasFile('profile_photo') && $user->profile_photo) {
                // Ambil public_id dari URL sebelumnya
                $parts = explode('/', parse_url($user->profile_photo, PHP_URL_PATH));
                $filename = end($parts);
                $publicId = 'profile_photos/' . pathinfo($filename, PATHINFO_FILENAME);

                Cloudinary::uploadApi()->destroy($publicId);
            }

            // Upload baru
            if ($request->hasFile('profile_photo')) {
                $uploadedFile = Cloudinary::uploadApi()->upload(
                    $request->file('profile_photo')->getRealPath(),
                    [
                        'folder' => 'profile_photos',
                        'public_id' => 'user_' . $user->id . '_' . time(),
                        'overwrite' => true,
                        'resource_type' => 'image'
                    ]
                );

                $user->profile_photo = $uploadedFile['secure_url'];
            }
    
            $user->save();
    
            return response()->json($user);
        } catch (Exception $e) {
            Log::error('Upload error: ' . $e->getMessage());
    
            return response()->json([
                'message' => 'Update gagal',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
