import React, { useState, useRef } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from './ChatMessage'

const auth = firebase.auth()
const firestore = firebase.firestore()

function Chat() {

    const dummy = useRef();
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formMessage, setFormMessage] = useState('')

    function handleChange (event) {
        const {name, value} = event.target
        setFormMessage(value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormMessage('')
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div style={{marginRight : '10%', marginLeft : '10%'}}>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
            <span ref={dummy}></span>
            <form onSubmit={handleSubmit}>
                <input className="form-text" type="text" value={formMessage} onChange={handleChange}/>
                <button>📨</button>
            </form>
        </div>
    )
}

export default Chat