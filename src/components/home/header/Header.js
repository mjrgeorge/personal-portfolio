import React from 'react';
import jubayerRahman from '../../../images/JubayerRahman.png';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className="header_wrap text-capitalize p-5">
                <div className="left_side">
                    <h2 className="display-4 text-warning">Hello I'm</h2>
                    <h2 style={{ color: "#ff448e" }} className="display-4 text-uppercase">Jubayer Rahman</h2>
                    <h1 className="text-info">
                        <Typical
                            steps={['A Programmer', 2000, 'A Web Developer', 2000, 'A Front End Developer', 2000, 'A MERN Stack Developer', 2000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h1>
                    <p className="para_text">I am a passionate Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most things using JavaScript.</p>
                    <a className="btn btn-outline-warning font-weight-bold" href="https://drive.google.com/file/d/1kZbqtPlKkN2LJKsJknGVeMgarVHxYBnR/view?usp=sharing" target="_blank"><big>Download Resume</big></a>
                    <Link className="btn btn-outline-warning font-weight-bold ml-3" to="/contact"><big>Hire me</big></Link>
                </div>
                <div className="right_side bg-transparent text-center">
                    <img className="img-fluid" src={jubayerRahman} alt="Jubayer" />
                </div>
            </section>
        </header>
    );
};

export default Header;