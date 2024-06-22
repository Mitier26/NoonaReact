import React from 'react'
import { Col, Row } from 'react-bootstrap'


const ContactItem = ({ item }) => {
    return (
        <Row>
            <Col lg={2}>
                <img className='item-img' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"></img>
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.number}</div>
            </Col>
        </Row>
    )
}

export default ContactItem
