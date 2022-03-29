import React from 'react'
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col, Nav } from 'react-bootstrap';
import firebase from 'firebase';
import swal from 'sweetalert';


function Login() {

    var email;
    var password;
    let history = useHistory();


    function setEmail(e) {
        email = e.target.value;
    }
    function setPassword(e) {
        password = e.target.value;


    }

    function login() {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                
                var user = userCredential.user;

                swal({
                    title: "Good job!",
                    text: "You Successfully Login",
                    icon: "success",
                    button: "next",
                });
                
            }).then((value)=>{
                history.push("/quiz")
                
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
            });
    }

    return (
        <div>
            <Container>
                <Row style={{ marginTop: "6%" }} >
                    <Col lg={4} md={6} sm={12} className="m-auto" >
                        <h1 className="fw-bold text-center " > Login Form</h1>
                        <Form className="mt-4" >


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onChange={setEmail} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={setPassword} placeholder="Password" />
                            </Form.Group>


                            <Button variant="primary w-100 mt-1 mb-2" onClick={login}>
                                Login
                            </Button>

                            <Link to="/">Account? Go to Sign Up</Link>

                        </Form>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Login
