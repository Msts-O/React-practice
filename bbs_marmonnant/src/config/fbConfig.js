import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOdNwwzi6B6vtte1hACpeR_SFhWEjvoeY",
    authDomain: "marmonnant.firebaseapp.com",
    projectId: "marmonnant",
    storageBucket: "marmonnant.appspot.com",
    messagingSenderId: "1307793185",
    appId: "1:1307793185:web:6109444fdfcda337801060"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;