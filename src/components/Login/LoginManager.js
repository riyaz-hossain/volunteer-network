import React from 'react';
import firebaseConfig from './firebaseConfig';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";



export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}


export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            return signedInUser
        })
}