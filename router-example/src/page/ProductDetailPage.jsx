import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const params = useParams();
    // productPage 에서 :id 로 보낸 값이 params 에 있다.
    // id = 주소창, url 에서 온것이다.
    console.log(params);

    const { id } = useParams;

    return (
        <div>
            <h1>Show Product Detail{id}</h1>
        </div>
    );
};

export default ProductDetailPage;
