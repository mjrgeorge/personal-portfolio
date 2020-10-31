import React from 'react';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className="sticky-top pl-4" bg="white" expand="lg">
            <Navbar.Brand href="/home"><big><h1 style={{fontVariant: "small-caps"}} className="pl-5 text-muted">Jubayer Rahman</h1></big></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="pl-4 text-muted" to="/home">Home</Link>
                    <Link className="pl-4 text-muted" to="/projects">Projects</Link>
                    <Link className="pl-4 text-muted" to="/blogs">Blogs</Link>
                    <Link className="pl-4 text-muted" to="/resume">CV</Link>
                    <Link className="pl-4 text-muted" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;