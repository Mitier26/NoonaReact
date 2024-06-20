import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        const url = `http://localhost:5000/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    return (
        <Container>
            <Row className='product-row'>
                <Col className='product-img'>
                    <img src={product?.img} alt={product?.title} />
                </Col>
                <Col className='product-details'>
                    <div>
                        <div>{product?.title}</div>
                        <div>\ {product?.price}</div>
                        <div>{product?.choice === true ? "Conscious choice" : '\u00A0'}</div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                사이즈 선택
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {product?.size.map((item, index) => (
                                    <Dropdown.Item key={index} href="">{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Button className='add-button' variant='danger'>추가</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail