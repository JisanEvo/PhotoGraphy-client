import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

 export const AuthContext = createContext(null)
 const googleProvider = new GoogleAuthProvider()

 const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const [loading, setLoading] = useState(true);
// create user
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

}
 // signin
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(email,password)
 }
//  logout
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
// update user
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
//   google sign in
const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
    
  }

    useEffect(() => {
    const unsubscribe=    onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user ', currentUser)
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;