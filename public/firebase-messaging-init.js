import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import {
    getMessaging,
    getToken,
    onMessage,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging.js";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

// Generate FCM token on button click
const enableFcmBtnEl = document.getElementById("generate-fcm-token");
if (enableFcmBtnEl) {
    enableFcmBtnEl.addEventListener("click", async () => {
        try {
            const token = await getToken(messaging, {
                vapidKey: FIREBASE_VAPID_KEY,
            });
            if (token) {
                console.log("FCM Token: " + token);
            } else {
                alert("No registration token available.");
            }
        } catch (err) {
            alert("An error occurred while retrieving token. " + err);
        }
    });
}

onMessage(messaging, (payload) => {
    console.log("Message received:", payload);
    new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/firebase-logo.png",
    });
});
