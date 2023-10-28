import React, { useState, useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import {    createUserDocumentFromAuth, 
            signInWithGooglePopup, 
            signInAuthUserWithEmalAndPassowrd } from "../../utils/firebase/firebase.utils"; 
import ButtonComponent from "../Button/button.component";
import "./signIn.styles.scss";
import AlertComponent from "../Alert/alert.component";
import { UserContext } from "../../contexts/user.context";


// αρχικές τιμές σε όλα τα πεδία της φόρμας. 
// Προσοχή πρέπει να είναι τα πιο κάτω πεδία ίδια με το όνομα του κάθε πεδίου της φόρμας
const defaultFormFields = {
    email: "",
    password:"",
};

const SignIn = () => {
        const [showState, setShowState] = useState(false);
        const [variantState, setVariantState] = useState("info");
        const [message, setMessage] = useState("");

        const [validated, setValidated] = useState(false);
        const [formFields, setFormFields] = useState(defaultFormFields); //set the formFields equal to the default values
        const { email, password } = formFields; //destructuring 

        const signInWithGoogle = async () => {
            const { user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
            
        }

        const { setCurrentUser } = useContext(UserContext);

        // ελέγχει εάν τα δύο password είναι ίδια
        const handleChange = (event) => {
            const password = document.querySelector("input[name= password]"); //διαβάζει το input με name=password
            // const confirm = document.querySelector("input[name = confirmPassword]"); //διαβάζει το input με name=confirmPassword
            // if (confirm.value === password.value) { //εάν οι δύο τιμές είναι ίδιες τότε σετάρει το setCustomValidity του confirmPassword 
            //     confirm.setCustomValidity("");
            // } else {
            //     confirm.setCustomValidity("Passwords do not match");
            // }

            /* 
            θέτουμε μεταβλητές ίδιες με τα αντίστοιχα πεδία του event.target
            κατόπιν κρατάμε όλα τα άλλα πεδία του formFields όπως είναι
            και αλλάζουμε μόνο αυτό με όνομα name, στο οποίο αποδίδουμε την τιμή value
            */
            const { name, value } = event.target;
            setFormFields({ ...formFields, [name]: value });    

        }
        // when form button is submitted
        const handleSubmit = async (event) => {
            
            event.preventDefault();
            
                try {
                    const { user } = await signInAuthUserWithEmalAndPassowrd(email, password);
                    setFormFields(defaultFormFields);
                    setShowState(false);
                    setCurrentUser(user);
                } catch (error) {
                    switch (error.code) {
                        case "auth/wrong-password":
                            setShowState(true);
                            setVariantState("danger");
                            setMessage("Incorrect password");
                            break;
                        case "auth/user-not-found":
                            setShowState(true);
                            setVariantState("danger");
                            setMessage("Incorrect user email");
                            break;
                        default:
                            console.log(error.code);
                            break;
                    }
                }
    
            }

           

            
            
        

    return (
           
        <Container>
            <Row className="mt-5 mb-5 justify-content-md-center">
                <Col md={6}>
                    <h2>Already have an account?</h2>
                    <span>Sign in with your email and password</span>
                    

                    <Form  onSubmit={handleSubmit}>
                        
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control 
                                required 
                                type="email" 
                                placeholder="Enter your email" 
                                name="email"
                                value={email}  
                                onChange={handleChange}  
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Your password</Form.Label> */}
                            <Form.Control 
                                required 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password"
                                minLength={6}
                                onChange={handleChange}
                                value={password}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a password with more than 6 characters</Form.Control.Feedback>
                            <Form.Text>Password should have at least 6 characters</Form.Text>
                        </Form.Group>

                        <div className="buttons-container">
                            <ButtonComponent children="Sign In" buttonType=""></ButtonComponent>
                            <ButtonComponent
                                children="Google sign in" 
                                buttonType="google"
                                type="button"
                                onClick={signInWithGoogle}>
                            </ButtonComponent>
                        </div>
                        
                        <AlertComponent 
                            showState={showState}
                            variantState={variantState}
                            message={message}
                        />
                    </Form>
                    
                </Col>
            </Row>
        </Container>
    
    )
}

export default SignIn;