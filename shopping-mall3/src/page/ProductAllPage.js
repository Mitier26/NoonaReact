import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const ProductAllPage = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        let url = "http://localhost:5000/products";
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item, index) => (
                        <Col key={index} lg={3}><ProductCard item={item} /></Col>
                    ))}
                </Row>
            </Container>
        </div>

    )
}

export default ProductAllPage