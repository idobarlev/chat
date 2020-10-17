import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FirebaseConfig from './firebaseConfig'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './Components/SignIn'
import SignOut from './Components/SignOut'
import Chat from './Components/Chat'

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="sticky header">
        <h1 style={{float : "left", display : "inline"}}>Chatime 💬</h1>
        <h1 style={{float : "right"}} >{user ? <SignOut /> : <SignIn />}</h1>
      </header>
        <div style={{marginTop : "85px"}}>
          {user ? <Chat /> : <h2 style={{marginTop : "20%"}}>Welcome to Chatime 💬 <br/> sign in to continue! 🔥</h2>}
        </div>
    </div>
  );
}

export default App;
