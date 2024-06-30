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
                    <h4 style={{ color: "#FA6957" }}>
                        <Typical
                            steps={['A Programmer', 2000, 'A Front End Developer', 2000, 'A Backend Developer', 2000, 'A Full Stack Developer', 2000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h4>
                    <p className="text-capitalize text-justify text-muted h5">As a passionate and dedicated web developer, I specialize in creating modern and responsive web applications. With a core skill set centered around JavaScript, I thrive on developing innovative solutions using React.js and Node.js. My journey in web development is driven by a continuous desire to improve and optimize my workflow. I am always eager to learn new technologies and apply them to real-world projects. Whether it's building a sleek front-end interface or crafting a robust back-end system, I approach each project with enthusiasm and a commitment to excellence.</p>
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