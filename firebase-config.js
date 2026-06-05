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
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

const FIREBASE_ENABLED = firebaseConfig.apiKey !== "YOUR_API_KEY";
