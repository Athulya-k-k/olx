import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAu3mh84y1-mssHK9wzD75zzcZlg065ndQ",
    authDomain: "olx-323bb.firebaseapp.com",
    projectId: "olx-323bb",
    storageBucket: "olx-323bb.appspot.com",
    messagingSenderId: "24738125571",
    appId: "1:24738125571:web:4146047557fa957b2bfb36",
    measurementId: "G-WN46SHC3TR"
  };

export default firebase.initializeApp(firebaseConfig)