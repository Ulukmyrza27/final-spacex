import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// firebase.initializeApp({
//   apiKey: "AIzaSyCc2riEghnYzk29AUqKFrfaCDMy01cYLqo",
//   authDomain: "spacex-auth.firebaseapp.com",
//   projectId: "spacex-auth",
//   storageBucket: "spacex-auth.appspot.com",
//   messagingSenderId: "689780210978",
//   appId: "1:689780210978:web:b46b03c790b40a260e797b",
// });

export const Context = createContext();

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
