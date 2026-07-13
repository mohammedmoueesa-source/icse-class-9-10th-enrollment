 const firebaseConfig = {
    apiKey: "AIzaSyD1MG-I6pgD91SEkKbawdVXsbhnWZ_4HPY",
    authDomain: "na-coaching-5b922.firebaseapp.com",
    projectId: "na-coaching-5b922",
    storageBucket: "na-coaching-5b922.firebasestorage.app",
    messagingSenderId: "268957725356",
    appId: "1:268957725356:web:78bf309de4ed7b3b01e509",
    measurementId: "G-9W61JY0BSZ"
  };

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('nacc')
