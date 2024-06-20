import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAllPage from './page/ProductAllPage';
import LoginPage from './page/LoginPage';
import ProductDetailPage from './page/ProductDetailPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAllPage />} />
        <Route path='login' element={<LoginPage setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<ProductDetailPage authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
