// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyDFBXQGms9BhRkKQ8mJbpRJjh_IMXwZqVE",
  authDomain: "vue-finalfpi.firebaseapp.com",
  projectId: "vue-finalfpi",
  storageBucket: "vue-finalfpi.appspot.com",
  messagingSenderId: "304834743057",
  appId: "1:304834743057:web:a89b2f25374db7fac39ab0"

};


const app = firebase.initializeApp(firebaseConfig);

export const st = app.storage();
export const db = app.firestore();

/* const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint } */

/* export const db = firebase
    .initializeApp({ projectId: 'vue-finalfpi' })
    .firestore() */


// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
