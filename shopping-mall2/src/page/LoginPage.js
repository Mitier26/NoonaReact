import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

const LoginPage = ({ setAuthenticate }) => {

    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        setAuthenticate(true);
        dispatch(authenticateAction.login(id, password));
        navigate("/");
    }

    return (
        <Container>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
    )
}

export default LoginPage