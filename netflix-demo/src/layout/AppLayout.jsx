import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router-dom';
// Outlet Router 자식에 있는 것을 가지고 오는 것이다.
// 이것이 없으면 화면에 아무것도 표시되지 않는다.
import './AppLayout.style.css';

const AppLayout = () => {
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const searchByKeyword = (event) => {
        event.preventDefault();
        navigate(`/movies?q=${keyword}`);
        setKeyword('');
    };

    return (
        <div className="bg-black min-vh-100">
            <Navbar expand="lg" className="bg-black">
                <Container fluid>
                    <Navbar.Brand className="text-danger fw-bold" href="#">
                        Netflix
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className="text-white" href="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className="text-white" href="/movies">
                                Movies
                            </Nav.Link>
                        </Nav>
                        <Form
                            className="d-flex"
                            onSubmit={(event) => {
                                searchByKeyword(event);
                            }}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={keyword}
                                onChange={(event) => setKeyword(event.target.value)}
                            />
                            <Button variant="outline-danger" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};

export default AppLayout;
