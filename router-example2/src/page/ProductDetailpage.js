import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailpage = () => {

    const params = useParams();

    return (
        <div>
            <h1>Product Detail</h1>
            <h2>{params.id}</h2>
        </div>
    )
}

export default ProductDetailpage