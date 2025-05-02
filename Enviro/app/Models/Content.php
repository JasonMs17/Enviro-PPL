<?php

namespace App\Models;

class Content
{
    const ROLE_USER = 'user';
    const ROLE_ASSISTANT = 'assistant';

    /**
     * Parse a message into the format required by Gemini API.
     *
     * @param string $message
     * @param string $role
     * @return array
     */
    public static function parse(string $message, string $role = self::ROLE_USER): array
    {
        return [
            'role' => $role,
            'content' => $message,
        ];
    }
}
