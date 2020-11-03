import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg';

const NavBar = () => {
    return (
        <>
            <ParticlesBg type="random" bg={true} />
            <Navbar bg="transparent" expand="lg">
                <Link to="/home">
                    <Navbar.Brand><big><h1 style={{ fontVariant: "small-caps" }} className="pl-3 text-danger">Jubayer Rahman</h1></big></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="pl-4 text-danger font-weight-bold" to="/home">Home</Link>
                        <Link className="pl-4 text-danger font-weight-bold" to="/projects">Projects</Link>
                        <Link className="pl-4 text-danger font-weight-bold" to="/blogs">Blogs</Link>
                        <Link className="pl-4 text-danger font-weight-bold" to="/cv">CV</Link>
                        <Link className="pl-4 text-danger font-weight-bold" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;