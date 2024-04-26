import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMPD-YyUP0cNhs3ty2cISgkbBkjt1SL44",
  authDomain: "e-comm-34d91.firebaseapp.com",
  projectId: "e-comm-34d91",
  storageBucket: "e-comm-34d91.appspot.com",
  messagingSenderId: "156198408839",
  appId: "1:156198408839:web:829660956259ca9fcede22",
  measurementId: "G-3VN9BX2QQM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;