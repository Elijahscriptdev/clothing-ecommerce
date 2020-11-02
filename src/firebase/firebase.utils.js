import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOUTcDLbqy18-TXlmrYgGyrcrEVtyLXQY",
  authDomain: "clothing-6e5f1.firebaseapp.com",
  databaseURL: "https://clothing-6e5f1.firebaseio.com",
  projectId: "clothing-6e5f1",
  storageBucket: "clothing-6e5f1.appspot.com",
  messagingSenderId: "784013878537",
  appId: "1:784013878537:web:526407bacba6415bbcdfd8",
  measurementId: "G-Z8J6MXXF3P",
};

// const config =  {
//     apiKey: "AIzaSyAh9Vie4xIrWfI36-WKvpxq3LUkIoWSJxI",
//     authDomain: "clothingecommerce-db.firebaseapp.com",
//     databaseURL: "https://clothingecommerce-db.firebaseio.com",
//     projectId: "clothingecommerce-db",
//     storageBucket: "clothingecommerce-db.appspot.com",
//     messagingSenderId: "1085641535795",
//     appId: "1:1085641535795:web:71f246ffbcd9d19991ce46",
//     measurementId: "G-29LJQ0W25L"
//   };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
