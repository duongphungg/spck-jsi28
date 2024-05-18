// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtV8FI5LJ6r0kZH8BNNyiXO-sh_jC5BRE",
    authDomain: "spck-6aad1.firebaseapp.com",
    databaseURL: "https://spck-6aad1-default-rtdb.firebaseio.com",
    projectId: "spck-6aad1",
    storageBucket: "spck-6aad1.appspot.com",
    messagingSenderId: "786386433155",
    appId: "1:786386433155:web:7c5308d0e70b8af023d7b6",
    measurementId: "G-9DDTJCN8WV"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

firebase.auth.Auth.Persistence.SESSION;