import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOUTcDLbqy18-TXlmrYgGyrcrEVtyLXQY",
    authDomain: "clothing-6e5f1.firebaseapp.com",
    databaseURL: "https://clothing-6e5f1.firebaseio.com",
    projectId: "clothing-6e5f1",
    storageBucket: "clothing-6e5f1.appspot.com",
    messagingSenderId: "784013878537",
    appId: "1:784013878537:web:526407bacba6415bbcdfd8",
    measurementId: "G-Z8J6MXXF3P"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;