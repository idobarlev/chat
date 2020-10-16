import firebase from 'firebase/app'

const configInitApp = firebase.initializeApp({
    apiKey: "AIzaSyBQRrAJKH1_EmJHu5RalQ8ZbxDWyi-FhgM",
      authDomain: "chat-ido.firebaseapp.com",
      databaseURL: "https://chat-ido.firebaseio.com",
      projectId: "chat-ido",
      storageBucket: "chat-ido.appspot.com",
      messagingSenderId: "984399028592",
      appId: "1:984399028592:web:01ef9f63cdf3d15d91efb5",
      measurementId: "G-6B2BC4H9Q8"
})

export default !firebase.apps.length ? configInitApp : firebase.app();