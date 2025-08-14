<?php

namespace App\Http\Controllers;

use DevKandil\NotiFire\Facades\Fcm;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function sendNotification()
    {
        $user = Auth::user();
        $fcmToken = $user->getFcmToken();

        $success = Fcm::withTitle('Laracon US Recap')
            ->withBody('Check out everything that was announced at Laracon US')
            ->withImage('https://example.com/image.jpg')
            ->withIcon("notification_icon")
            ->withColor("#FF5733")
            ->withSound('default')
            ->sendNotification($fcmToken);
    }
}