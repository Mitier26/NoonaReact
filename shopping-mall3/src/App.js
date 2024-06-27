import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductAllPage from './page/ProductAllPage'
import LoginPage from './page/LoginPage'
import ProductDetail from './page/ProductDetail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAllPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
