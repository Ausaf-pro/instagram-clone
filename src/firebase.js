import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCAUR-bBfJOkCedjyl0jVRrSGo-nM0yM0A",
  authDomain: "instagram-clone-react-e2c51.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-e2c51-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-e2c51",
  storageBucket: "instagram-clone-react-e2c51.appspot.com",
  messagingSenderId: "599380522467",
  appId: "1:599380522467:web:05f787f4560ac8986c5cd6",
  measurementId: "G-G2K06LC98R"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };