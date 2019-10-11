import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';


const config ={

        apiKey: "AIzaSyCm-eFUzbCmraLgIilLJoXtHSwLXOVEIoM",
        authDomain: "crwn-db-652eb.firebaseapp.com",
        databaseURL: "https://crwn-db-652eb.firebaseio.com",
        projectId: "crwn-db-652eb",
        storageBucket: "crwn-db-652eb.appspot.com",
        messagingSenderId: "798025940625",
        appId: "1:798025940625:web:41ecb178b5950788bc4930",
        measurementId: "G-NESNZTFG19"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;
