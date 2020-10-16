import React from 'react'
import firebsae from 'firebase'
import 'firebase/auth'

const auth = firebsae.auth()

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    console.log('id: ' + uid)
    console.log('auth id: ' + auth.currentUser.uid)
    
    return(
        <div className={messageClass}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage