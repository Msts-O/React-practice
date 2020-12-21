import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyAvtxatp3TIQYm_WWIhZlG7F4-eXr_UJ-g",
    authDomain: "marmonnant.firebaseapp.com",
    databaseURL: "https://.firebaseio.com",
    projectId: "marmonnant-7a5f3",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase