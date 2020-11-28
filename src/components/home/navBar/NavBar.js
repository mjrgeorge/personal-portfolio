import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ParticlesBg from 'particles-bg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';

const NavBar = () => {
    // "color"
    // "ball"
    // "lines"
    // "thick"
    // "circle"
    // "cobweb"
    // "polygon"
    // "square"
    // "tadpole"
    // "fountain"
    // "random"
    // "custom"
    return (
        <div className="container">
            <ParticlesBg type="polygon" bg={true} />
            <Navbar bg="transparent" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                        <img className="img-fluid" style={{ height: "80px" }} src={logo} alt="logo" />
                        {/* <h2 style={{ fontVariant: "small-caps" }} className="mt-3 text-info font-weight-bolder">
                        <FontAwesomeIcon style={{color:"#FA6957"}} icon={faCode} />
                        Jubayer Rahman
                        </h2> */}
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mt-3">
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/home">Home</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/skills">Skills</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/portfolio">Portfolio</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/resume">Resume</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/blogs">Blogs</Link>
                        <Link className="h4 text-info font-weight-bold ml-4 text-decoration-none" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;