import React from 'react'
import firebase from 'firebase'
import { Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

function GoogleAuth() {

    let LoginWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log("userData" , user.uid);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
            <Button variant="primary w-100 mt-3" onClick={LoginWithGoogle}>
                Login With Google
            </Button>
        </div>
    )
}

export default GoogleAuth
