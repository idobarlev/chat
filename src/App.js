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
      <header>
        <nav>
          <h1>Chatime 💬</h1>
          {user && <SignOut />}
        </nav>
      </header>

        {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
