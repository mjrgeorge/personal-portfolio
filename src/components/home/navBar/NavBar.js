import React from 'react';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="sticky-top px-5" bg="white" expand="lg">
            <Navbar.Brand href="/home"><span className="display-4 pl-3">mjrgeorge</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="pl-4" href="/home">Home</Nav.Link>
                    <Nav.Link className="pl-4" href="/projects">Projects</Nav.Link>
                    <Nav.Link className="pl-4" href="/blogs">Blogs</Nav.Link>
                    <Nav.Link className="pl-4" href="/resume">CV</Nav.Link>
                    <Nav.Link className="pl-4" href="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;