import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Col, Container, Row } from 'react-bootstrap'

const ProductAllPage = () => {

  const [productList, setProductList] = useState([]);

  const getProductAll = async () => {
    const url = 'http://localhost:5000/products';
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProductAll();
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((item, index) => (
          <Col lg={3}><Card key={index} item={item} /></Col>
        ))}
      </Row>

    </Container>

  )
}

export default ProductAllPage