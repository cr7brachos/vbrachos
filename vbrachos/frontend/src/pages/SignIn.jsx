import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import SignUp from "./SignUp";


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }

    return (
        <div>
            <h1>I am in SignIn</h1>
            <button onClick={logGoogleUser}>SignIn with Google</button>
            <br></br>
            <SignUp></SignUp>
        </div>
    )
}

export default SignIn;