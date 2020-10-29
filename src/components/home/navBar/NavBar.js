import React from 'react';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="navbar sticky-top navbar-light bg-white px-5">
            <Navbar.Brand href="home"><span className="display-4 pl-3">mjrgeorge</span></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link className="pl-4" href="home">Home</Nav.Link>
                <Nav.Link className="pl-4" href="#projects">Projects</Nav.Link>
                <Nav.Link className="pl-4" href="#blogs">Blogs</Nav.Link>
                <Nav.Link className="pl-4" href="contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;