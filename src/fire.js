import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCc2riEghnYzk29AUqKFrfaCDMy01cYLqo",
  authDomain: "spacex-auth.firebaseapp.com",
  projectId: "spacex-auth",
  storageBucket: "spacex-auth.appspot.com",
  messagingSenderId: "689780210978",
  appId: "1:689780210978:web:b46b03c790b40a260e797b",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAL8keBE02wYInGHKa64iFe7ZS1K0eHzfs",
//   authDomain: "spacex-b35a2.firebaseapp.com",
//   projectId: "spacex-b35a2",
//   storageBucket: "spacex-b35a2.appspot.com",
//   messagingSenderId: "461247446671",
//   appId: "1:461247446671:web:701a63688862e338d2fafa",
// };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
// export const db = getFirestore(app);
