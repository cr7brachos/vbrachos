import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";


// αρχικές τιμές σε όλα τα πεδία της φόρμας. 
// Προσοχή πρέπει να είναι τα πιο κάτω πεδία ίδια με το όνομα του κάθε πεδίου της φόρμας
const defaultFormFields = {
    name: "",
    lastName: "",
    email: "",
    password:"",
    confirmPassword:""
};

const SignUp = () => {

        const [validated, setValidated] = useState(false);
        const [formFields, setFormFields] = useState(defaultFormFields); //set the formFields equal to the default values
        const { name, lastName, email, password, confirmPassword } = formFields; //destructuring 

        // ελέγχει εάν τα δύο password είναι ίδια
        const handleChange = (event) => {
            const password = document.querySelector("input[name= password]"); //διαβάζει το input με name=password
            const confirm = document.querySelector("input[name = confirmPassword]"); //διαβάζει το input με name=confirmPassword
            if (confirm.value === password.value) { //εάν οι δύο τιμές είναι ίδιες τότε σετάρει το setCustomValidity του confirmPassword 
                confirm.setCustomValidity("");
            } else {
                confirm.setCustomValidity("Passwords do not match");
            }

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
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            
            } else {
                event.preventDefault();
                event.stopPropagation();
                try {
                    const { user } = await createAuthUserWithEmailAndPassword(email, password);
                    await createUserDocumentFromAuth(user, { displayName: name + " " + lastName });
                    setFormFields(defaultFormFields);
                    
                } catch (error) {
                    console.log("user creation encountered an error", error);
                }
    
            }

            setValidated(true);

            
            
        };

    return (
           
        <Container>
            <Row className="mt-5 mb-5 justify-content-md-center">
                <Col md={6}>
                    <h1>Sign Up</h1>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>Your first name</Form.Label>
                            <Form.Control 
                                required 
                                type="text" 
                                placeholder="Enter your first name" 
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control 
                                required 
                                type="text" 
                                placeholder="Enter your last name" 
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
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
                            <Form.Label>Your password</Form.Label>
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

                        <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control 
                                required 
                                type="password" 
                                placeholder="Repeat password" 
                                name="confirmPassword"
                                minLength={6}
                                onChange={handleChange}
                                value={confirmPassword}
                            />
                            <Form.Control.Feedback type="invalid">Both passwords should match</Form.Control.Feedback>
                            <Form.Text>Password should have at least 6 characters</Form.Text>
                        </Form.Group>
                        <Row className="pb-2">
                            <Col>
                                Do you have an account already?
                                <Link to={"/login"}> Login </Link>
                            </Col>
                        </Row>
                            
                        <Button type="submit">
                            {/* <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> */}
                                Sign Up
                        </Button>
                        <Alert show={true} variant="danger">User with this email already exist</Alert>
                        <Alert show={true} variant="info">User created !</Alert>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
    
    )
}

export default SignUp;