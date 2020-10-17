import React from "react"
import firebase from 'firebase/app';
import 'firebase/auth';
import FirebaseConfig from '../firebaseConfig'

const auth = firebase.auth();

function SignIn() {
    function SignInWithGoogle() {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    return (
      <div>
         <button className="btn sign-in" onClick={SignInWithGoogle}>Sign in with google</button>
      </div>
    )
}

export default SignIn

  