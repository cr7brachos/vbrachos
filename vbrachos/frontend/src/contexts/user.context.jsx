import { createContext, useState, useEffect } from "react"; 
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
//this is the initial value for the Context
export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null,
});

//create a Provider
//children: are all components which are wrapped inside the UserProvider
//all components can use both the setter (setCurrentUser), as well as the value (currentUser)
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
 
    useEffect(()=> {
        const unsuscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            if (user) { 
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsuscribe;

    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
