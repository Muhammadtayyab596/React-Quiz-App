import React, { useState } from 'react'
import firebase from 'firebase'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import GoogleAuth from '../GoogleAuth/GoogleAuth';

import swal from 'sweetalert'

function SignUp() {

    var email;
    var password;
    let history = useHistory();


    function setEmail(e) {
        email = e.target.value;
    }
    function setPassword(e) {
        password = e.target.value;


    }

    function submitte() {
        console.log(email);
        console.log(password);

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log("Sign up Sucessfull");

                swal({
                    title: "Good job!",
                    text: "You Successfully Sign up",
                    icon: "success",
                    button: "next",
                });


                // ...
            }).then((value) => {
                history.push("/login")

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);

                swal({
                    title: "Bad job!",
                    text: errorMessage,
                    icon: "error",
                    button: "try Again",
                });
                // ..
            });

    }

    return (
        <Container>
            <Row style={{ marginTop: "6%" }} >
                <Col lg={4} md={6} sm={12} className="m-auto" >
                    <h1 className="fw-bold text-center " > Sign Up Form</h1>
                    <Form className="mt-4" >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="Username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={setEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={setPassword} type="password" placeholder="Password" />
                        </Form.Group>


                        <Button variant="primary w-100 mt-1 mb-2" onClick={submitte}>
                            Create Account
                        </Button>

                        <Link to="login"> Already Account? Go to Login</Link>

                        <GoogleAuth />

                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default SignUp
