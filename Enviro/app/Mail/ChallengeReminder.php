<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ChallengeReminder extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $report;

    public function __construct($user, $report)
    {
        $this->user = $user;
        $this->report = $report;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->subject('Pengingat: Challenge Anda Tinggal 1 Hari Lagi!')
                    ->view('emails.challenge_reminder');
    }
}
