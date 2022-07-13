import { createContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UserContext = createContext()

export const AuthContextProvider =({children}) => {
    const [user, setUser] = useState({})


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = async() => {
        try{
            const googleAuth = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, googleAuth);
            console.log("Google sign in")
          return res;
        }
        catch(err){
          return err
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])
    return(
        <UserContext.Provider value={{user, signIn, signInWithGoogle}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}