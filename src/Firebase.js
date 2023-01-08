// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg4nOKkPm5FufwdRcAzno2BBY7tAhwv_I",
  authDomain: "reels-718c5.firebaseapp.com",
  projectId: "reels-718c5",
  storageBucket: "reels-718c5.appspot.com",
  messagingSenderId: "654775706250",
  appId: "1:654775706250:web:e21cfc89f227689531c373"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth =firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  getTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage();