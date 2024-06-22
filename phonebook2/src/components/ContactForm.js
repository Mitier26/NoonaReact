import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const ContactForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);


    const addPhone = (event) => {
        event.preventDefault();

        dispatch({ type: "ADD_CONTACT", payload: { name, number } });

    }

    return (
        <Form onSubmit={addPhone}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>이름</Form.Label>
                <Form.Control type="test" placeholder="이름 입력" onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="Number" placeholder="번호 입력" onChange={(event) => setNumber(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    )
}

export default ContactForm