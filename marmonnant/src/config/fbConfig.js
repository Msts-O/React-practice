import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyAvtxatp3TIQYm_WWIhZlG7F4-eXr_UJ-g",
    authDomain: "marmonnant-7a5f3.firebaseapp.com",
    databaseURL: "https://marmonnant-7a5f3-default-rtdb.firebaseio.com",
    projectId: "marmonnant-7a5f3",
    storageBucket: "marmonnant-7a5f3.appspot.com",
    messagingSenderId: "307494725891",
    appId: "1:307494725891:web:145682f5a980b83c8ba136",
    measurementId: "G-4NQFC7NWY6"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase