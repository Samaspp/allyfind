import { useState } from "react"
import {createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../src/config/firebase"

export const Auth=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const signin=async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        }
        catch(e){
            console.error(e)
        }        
    }
    const logout=async()=>{
        try{
            await signOut(auth)
        }
        catch(e){
            console.error(e)
        }        
    }
    const login = async () => {
        try {
            // Sign in the user using Firebase Authentication
            await signInWithEmailAndPassword(auth, email, password);

            // Additional actions after successful login
            console.log("User logged in successfully!");
        } catch (e) {
            console.error(e);
        }
    }
    return(
        <div>
            <input 
                placeholder="email..."
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                placeholder="password..."
                onChange={(e)=>setPassword(e.target.value)}
                />
            <button onClick={signin}>Sign up</button>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Sign out</button>
        </div>
    )
}

