const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.detectMagicWord = functions.firestore
       .document('messages/{msgId}')
       .onCreate(async (doc, ctx) => {

        const { text, uid } = doc.data(); 
        
        if (text === 'abay') {

            const applyMagic = `🔥ABAY = 🐐🔥`;
            await doc.ref.update({text: applyMagic});

            await db.collection('wizards').doc(uid).set({});
        } 
});