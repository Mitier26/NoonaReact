import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ReactQueryPage from './pages/ReactQueryPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import NormalPage from './pages/NormalPage';

function App() {
  return (
    <div >
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HomePage</Nav.Link>
            <Nav.Link href="/normal">NormalPage</Nav.Link>
            <Nav.Link href="/react-query">QueryPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>HomePage</Link>
        <Link to="/normal" style={{ marginRight: "10px" }}>NormalPage</Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/normal' element={<NormalPage />} />
        <Route path='/react-query' element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
