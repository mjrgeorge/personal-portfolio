import React from 'react';
import './Header.css';
import jubayerRahman from '../../../images/JubayerRahman.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className="header_wrap text-capitalize">
                <div className="left_side">
                    <h2>hello i'm</h2>
                    <h1 className="font-weight-normal text-warning display-4">Jubayer Rahman</h1>
                    <p className="para_text">I am a passionate Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most things using JavaScript.</p>
                    {/* <p className="para_text">To maintain a full time job working as a junior web developer to develop, maintain, design software. I have always been interested in programming and making awesome website projects. So, I choose that field of study and my profession.</p> */}
                    <a className="btn btn-outline-warning font-weight-bold" href="https://drive.google.com/file/d/1kZbqtPlKkN2LJKsJknGVeMgarVHxYBnR/view?usp=sharing" target="_blank"><big>Download Resume</big></a>
                    <Link className="btn btn-outline-warning font-weight-bold ml-3" to="/contact"><big>Hire me</big></Link>
                </div>
                <div className="right_side text-center">
                    <img className="img-fluid" src={jubayerRahman} alt="Jubayer" />
                </div>
            </section>
        </header>
    );
};

export default Header;