import React from 'react';
import notFound from '../../404.png';
import './NotFoundPage.style.css';

const NotFoundPage = () => {
    return (
        <div>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFoundPage;
