<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // Custom email verification link
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            Log::info('Custom verify email called.', ['url' => $url]);

            $parsedUrl = parse_url($url);
            $pathSegments = explode('/', trim($parsedUrl['path'], '/'));
            if (count($pathSegments) < 3) {
                throw new \Exception('Invalid URL structure. Expected at least 3 segments.');
            }

            $id = $pathSegments[2]; // The `id` should be the second segment
            $hash = $pathSegments[3]; // The `hash` should be the third segment

            parse_str($parsedUrl['query'], $queryParams);
            if (!isset($queryParams['signature'])) {
                throw new \Exception('Missing signature parameter in URL.');
            }

            $frontendUrl = config('app.frontend_url') . 'verify-email?' . http_build_query([
                'id' => $id,
                'hash' => $hash,
                'expires' => $queryParams['expires'],
                'signature' => $queryParams['signature'],
            ]);

            return (new MailMessage())
                ->subject('Verify Email Address')
                ->line('Click the button below to verify your email address.')
                ->action('Verify Email Address', $frontendUrl);
        });

        // Custom password reset link
        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url')."reset-password/$token?email={$notifiable->getEmailForPasswordReset()}";
        });
    }
}
