// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAZtpapQ_MiwPTxTpjJp1ml_FuTH6bvW9o",
    authDomain: "danielstore-4cb9e.firebaseapp.com",
    projectId: "danielstore-4cb9e",
    storageBucket: "danielstore-4cb9e.appspot.com",
    messagingSenderId: "367443041845",
    appId: "1:367443041845:web:f63f1eaa572ec274105b7c",
    measurementId: "G-TCX5QFZZ0J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  