import React from 'react'
import firebsae from 'firebase'
import 'firebase/auth'

const auth = firebsae.auth()

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent msg' : 'received msg';
    
    return(
        <div className={messageClass} >
            <div>
                <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessage