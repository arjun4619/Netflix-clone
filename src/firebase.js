import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhGDbBuQ7kFYEsMIF6gZ8P97KmdilqTxo",
    authDomain: "netflix-clone-924a5.firebaseapp.com",
    projectId: "netflix-clone-924a5",
    storageBucket: "netflix-clone-924a5.appspot.com",
    messagingSenderId: "277235919557",
    appId: "1:277235919557:web:5652bd9bd0001c14651eac",
    measurementId: "G-2W9FDGRW3P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;