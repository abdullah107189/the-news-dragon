import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(true)
    const handleTerms = (e) => {
        setAccepted(e.target.checked)
    }
    const navigate = useNavigate()
    const handleRegSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            alert('password incorect')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error.massage)
            })
    }
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h1 className=" mb-5">Please Register!</h1>
                                <div className="mb-3">
                                    <Form onSubmit={handleRegSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                            <Form.Control type="email" name="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" name="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Confirm</Form.Label>
                                            <Form.Control type="password" name="confirm" placeholder="Confirm" />
                                        </Form.Group>

                                        <Form.Check
                                            required
                                            onClick={handleTerms}
                                            type='checkbox'
                                            name="terms"
                                            label={<Link to={'/terms'}>Agree to terms and conditions</Link>}
                                        />
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        >
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button variant="primary" disabled={!accepted} type="submit">
                                                Register
                                            </Button>
                                        </div>
                                    </Form>
                                    <div className="mt-3">
                                        <div className="mb-0  text-center">
                                            Don't have an account?{" "}
                                            <Link to={`/login`} className='text-primary fw-bold'>Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;