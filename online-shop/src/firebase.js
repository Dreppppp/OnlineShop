import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCq24_cprshLh1szDTzoq37FZ6b7Cg9XWU",
  authDomain: "online-shop-ae1b7.firebaseapp.com",
  projectId: "online-shop-ae1b7",
  storageBucket: "online-shop-ae1b7.firebasestorage.app",
  messagingSenderId: "483821832866",
  appId: "1:483821832866:web:7df1a73e03b98a284fe5fb",
  measurementId: "G-91G1FX9WCK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);