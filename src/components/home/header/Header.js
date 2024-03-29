import React from 'react';
import jubayerRahman from '../../../images/jubayer1.png';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className="row">
                <div className="col-lg-6 p-4">
                    <h2 className="display-4 text-dark">Hello I'm</h2>
                    <h1 className="text-warning">Jubayer Rahman</h1>
                    <h4 style={{color:"#FA6957"}}>
                        <Typical
                            steps={['A Programmer', 2000, 'A Front End Developer', 2000, 'A MERN Stack Developer', 2000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h4>
                    <p className="text-capitalize text-justify text-muted h5">I want to built-up my career as a Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most interesting things using React.Js And Node.Js. I think I have enough Knowledge In The HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.Js, React-Router, React-Bootstrap, Material-UI, Firebase, Netlify And Also Comfortable With Node.JS, Express.JS, MongoDB. I try to improve Myself in  Every moment.</p>
                    <a className="btn btn-outline-info font-weight-bold mt-1" href="https://docs.google.com/document/d/1xKf-0kOG1sd2OAGuCKZrF2xC42QM9pfbcihGcojTKyA/export?format=pdf" target="_blank"><big>Download Resume</big></a>
                    <Link className="btn btn-outline-info font-weight-bold ml-2 mt-1" to="/contact"><big>Hire Me</big></Link>
                </div>
                <div className="col-lg-6 p-4 d-flex justify-content-center align-items-center">
                    <img style={{ height: "430px" }} className="img-fluid" src={jubayerRahman} alt="Jubayer" />
                </div>
            </section>
        </header>
    );
};

export default Header;