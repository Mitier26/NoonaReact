import { useState } from 'react';
import './App.css';
import Homepage from './page/HomePage';
import AboutPage from './page/AboutPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
    const [authenticate, setAuthenticate] = useState(false);
    const PrivateRoute = () => {
        return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
    };

    return (
        <div>
            {/* Routes : 각 페이지를 스위치 해 주는 역할 */}
            <Routes>
                {/* Route : 페이지 정의 */}
                {/* 페이지가 여러 개면 주소도 여러 개 있어야 한다. */}
                {/* path : 주소 element : 주소로 이동 했을 때 보여지는 것 */}
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:id/:num" element={<ProductDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/user" element={<PrivateRoute />} />
                {/* 
                  URL 디자인 패턴
                  RESTful Routes
                  :id  : = 파라미터, 매개변수, 변하는 값
                */}
            </Routes>
        </div>
    );
}

export default App;
