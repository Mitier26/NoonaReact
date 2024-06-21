import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);

    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();

        dispatch({ type: "ADD_CONTACT", payload: { name, number } });

    }

    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력" onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="number" placeholder="전화번호 입력" onChange={(event) => setNumber(event.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm