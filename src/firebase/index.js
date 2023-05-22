import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp8IeumFp0wuBMEV7KmLaTQixYYVqnLT4",
  authDomain: "comon-8f336.firebaseapp.com",
  projectId: "comon-8f336",
  storageBucket: "comon-8f336.appspot.com",
  messagingSenderId: "251121851923",
  appId: "1:251121851923:web:b8de37860749e5b29ca9e6",
  measurementId: "G-HHXT6HH4RG"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

//DB
export const auth = firebase.auth()
export const db = firebase.firestore()
export const stroage = firebase.storage()

export const USER_COLLECTION = db.collection('users')
export const Fund_COLLECTION = db.collection('funds')