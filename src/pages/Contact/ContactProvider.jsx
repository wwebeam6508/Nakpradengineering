
import {  collection, addDoc, getFirestore} from '@firebase/firestore'
export async function addFormContact(form) {
    const db = getFirestore()
    const ref = collection(db, "contacts")
    await addDoc(ref,{
        detail: form.detail,
        email: form.email
    })
}