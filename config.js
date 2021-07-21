import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBeSI3MO7feuTmvju20lJTOwSQJzbqq44U",
  authDomain: "barter-system-69866.firebaseapp.com",
  projectId: "barter-system-69866",
  storageBucket: "barter-system-69866.appspot.com",
  messagingSenderId: "431510653482",
  appId: "1:431510653482:web:0aba59536a96b1a66bd153"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
