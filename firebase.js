import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeJdKl0e8CD3H1Bjd8I3Mni1imUnzl64w",
  authDomain: "react-mobil-proje.firebaseapp.com",
  databaseURL: "https://react-mobil-proje-default-rtdb.firebaseio.com",
  projectId: "react-mobil-proje",
  storageBucket: "react-mobil-proje.appspot.com",
  messagingSenderId: "322720429076",
  appId: "1:322720429076:web:eb80277b015ac1e0bc2301",
  measurementId: "G-28M6GRBC08"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };