import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        const url = 'http://localhost:5000/products'
        const response = await fetch(url);
        const data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <ProductCard />
        </div>
    )
}

export default ProductAll