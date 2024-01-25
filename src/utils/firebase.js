// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZDapnZzqt2w8U-vje2i2k4l6xgl-Dxmc",
  authDomain: "h-sms-c0a4a.firebaseapp.com",
  projectId: "h-sms-c0a4a",
  storageBucket: "h-sms-c0a4a.appspot.com",
  messagingSenderId: "622927008981",
  appId: "1:622927008981:web:48779e0fa9f6b75849be5c",
  measurementId: "G-LL3KTT5FRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const storage = getStorage(app);
const rdb = getDatabase();
const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED,
});

export { auth, db, storage, rdb };
