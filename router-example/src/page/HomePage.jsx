import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const goProductPage = () => {
        navigate('/product?q=pants');
    };

    return (
        <div>
            <h1>홈페이지</h1>
            {/* Link : 원하는 페이지로 이동할 수 있다 a 링크 같은 것 */}
            <Link to="/about">Go to about page</Link>
            <button onClick={goProductPage}>Go To Product Page</button>
        </div>
    );
};

export default HomePage;
