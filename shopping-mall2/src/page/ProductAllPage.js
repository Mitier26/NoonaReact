import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Col, Container, Row } from 'react-bootstrap'
import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';


const ProductAllPage = () => {

  // const [productList, setProductList] = useState([]);
  // 리덕스를 사용하면서 필요 없어 졌다.
  // const productList = useSelector(state => state.productList);
  const productList = useSelector(state => state.product.productList);
  // combineReducer를 사용하면 state가 어디에서 온것인지 알려 주어야 한다.
  // state.product 라고 적어주는데
  // product는 reducer>index 에 만들어 준 이름이다.

  const dispatch = useDispatch();

  const getProductAll = async () => {
    let searchQuery = query.get('q') || "";
    // const url = 'http://localhost:5000/products';
    // const response = await fetch(url);
    // const data = await response.json();
    // setProductList(data);
    // 이것들은 action으로 옮겼다

    dispatch(productAction.getProduct(searchQuery));
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