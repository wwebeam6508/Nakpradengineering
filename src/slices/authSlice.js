
import { doc, getFirestore, writeBatch } from "@firebase/firestore"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage"
const initialState = {
}

export const updateUserAvatar = createAsyncThunk('updateUserAvatar',
    async (file, store) =>{
        return await uploadImage(file, store.getState().auth.user.uid)
    }
)

export const updateUser = createAsyncThunk('updateUser',
    async (userdetail, store) =>{
        const db = getFirestore()
        const batch = writeBatch(db)
        const userRef = doc(db, "users", store.getState().auth.user.uid)
        const userinfo = userdetail
        batch.update(userRef, userinfo)
        await batch.commit()
        return userinfo
    }
)

const appSlice = createSlice({ 
    name: 'app',
    initialState,
    reducers:{
        signIn: (state, action) =>{
            state.user = action.payload
        }
    }
})

export const {signIn , signOutApp} = appSlice.actions


export default appSlice.reducer