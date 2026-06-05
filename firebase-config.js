// ════════════════════════════════════════════════════════════════
// Firebase configuration
// ════════════════════════════════════════════════════════════════
//
// To enable Google sign-in + cloud progress sync:
// 1. Create a new Firebase project at https://console.firebase.google.com
// 2. Add a Web app, copy the firebaseConfig below
// 3. Enable Authentication → Google
// 4. Create a Firestore database (test mode is fine to start)
// 5. firebase deploy (deploys the static site + firestore.rules)
//
// If you leave this as-is, the site still works fully — progress just
// saves to localStorage in whatever browser the learner is using.
//
// See SETUP.md (in the parent learn-lamp repo) for full step-by-step.
// ════════════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyBNeE4Yhm0XJCowjHtxqjabQO5AEccXFEs",
  authDomain:        "learn-ksu.firebaseapp.com",
  projectId:         "learn-ksu",
  storageBucket:     "learn-ksu.firebasestorage.app",
  messagingSenderId: "267354184555",
  appId:             "1:267354184555:web:caa8cf5835a73f655c0a2e"
};

const FIREBASE_ENABLED = firebaseConfig.apiKey !== "YOUR_API_KEY";
