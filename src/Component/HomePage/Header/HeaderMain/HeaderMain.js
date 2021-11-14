import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const HeaderMain = () => {
    return (
        <Container>
        <Navbar bg="" variant="dark" expand="lg">
            <Navbar.Brand href="/Home"><span style={{ fontSize: '30px' }}>POWER <span style={{ color: 'yellow' }}>X</span></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/OurClass">Services</Nav.Link>
                    <Nav.Link href="/OurClass">Our Classes</Nav.Link>
                    <Nav.Link href="/AboutUs">About us</Nav.Link>
                    <Nav.Link href="/Home">Blog</Nav.Link>
                    <Nav.Link href="/Pricing">Pricing</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default HeaderMain;