import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            console.log("this is current user", currenUser);
            setUser(currenUser);
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        userSignIn,
        userSignOut
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

UserProvider.propTypes = {
    children: PropTypes.node
}