import SignUp from "../SignUp";
import SignIn from "../../components/sign-in-form/SignIn";
import "./authentication.styles.scss";


const AuthenticationComponent = () => {

    

    return (
        <div className="authentication-container">
                     
            
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default AuthenticationComponent;