import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCU-DZvRCkh56VBTlJ8ni6TzyeV_WjeBGI",
    authDomain: "crown-db-e2ba2.firebaseapp.com",
    projectId: "crown-db-e2ba2",
    storageBucket: "crown-db-e2ba2.appspot.com",
    messagingSenderId: "546732489621",
    appId: "1:546732489621:web:ae1d5bb2dda8f2a78a549c",
    measurementId: "G-SRXC6SRERR"
  };


  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();



  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'prompt': 'select_account'
  });



  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;