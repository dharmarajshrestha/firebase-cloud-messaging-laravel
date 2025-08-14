import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
window.FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
window.FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
window.FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
window.FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
window.FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
window.FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
window.FIREBASE_VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;
