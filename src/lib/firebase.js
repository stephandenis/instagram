import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// seed file called
const config = {
  apiKey: "AIzaSyD5Qbyi-PCfr58kTsa_gO6Zqwd2HnodjSc",
  authDomain: "instagram-deni.firebaseapp.com",
  projectId: "instagram-deni",
  storageBucket: "instagram-deni.appspot.com",
  messagingSenderId: "850585556330",
  appId: "1:850585556330:web:7863163ed33be8d6a64113",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
export { firebase, FieldValue };
