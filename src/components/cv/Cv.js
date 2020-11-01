import React from 'react';
import jubayer from '../../images/jubayer.png';
import Footer from '../home/footer/Footer';
import NavBar from '../home/navBar/NavBar';

const cv = () => {
    return (
        <>
            <NavBar />
            <div className="resume">
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <div className="row">
                        <div className="col-md-3 text-left">
                            <img style={{ height: '120px', width: '100px' }} className="rounded-circle" src={jubayer} alt="jubayerRahman" />
                        </div>
                        <div className="col-md-5 text-center">
                            <h1>Jubayer Rahman George</h1>
                            <h4>Full Stack Junior Web Developer</h4>
                            <a href="mailto:mjrgeorge@gmail.com">Email: mjrgeorge@gmail.com</a>
                        </div>
                        <div className="col-md-4 text-right">
                            <address>
                                Debiganj, Panchagarh– 5020
                        <br />
                        Rangpur, Bangladesh
                        <div>
                                    <a className="ml-3" href="tel:+8801841503316">Phone</a>
                                    <a className="ml-3" href="https://www.linkedin.com/in/jubayer-rahman-3776b21b1/">LinkedIn</a>
                                    <a className="ml-3" href="https://github.com/mjrgeorge">Github</a>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <h3 className="text-info mb-4">Career Object</h3>
                    <p className="m-3">To work in a professional environment for getting the opportunity to utilize my knowledge, creativity as well as technical experiences to attain the organization goal and to build up my career in the field of communication sector</p>
                </div>
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <h3 className="text-info mb-4">Programming Skills</h3>
                    <h4 className="m-3">⮚ Good At :</h4>
                    <h5 className="ml-5">HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify. </h5>
                    <h4 className="m-3">⮚ Comfortable :</h4>
                    <h5 className="ml-5"> NodeJS, Express JS, MongoDB, Heroku</h5>
                    <h4 className="m-3">⮚ Tools :</h4>
                    <h5 className="ml-5">GitHub, Chrome Dev Tools, VS Codes </h5>
                </div>
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <h3 className="text-info mb-4">Projects</h3>
                    <div className="shadow m-3 p-5">
                        <h4>⮚ Creative Agency</h4>
                        <p className="ml-5">I’ve created a simple full-stack project. It has two portions, the Client panel, and the Admin  panel. Clients can't access the sensitive area of this site. But, the admin can access all areas.</p>
                        <h5 className="ml-3">Here I  used</h5>
                        <h6 className="ml-5">HTML5, CSS3, ES6, React, Bootstrap, MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</h6>
                        <h5 className="ml-3">You can visit repositories</h5>
                        <div>
                            <a className="bg-white m-1 p-1  rounded" href="https://creative-agency-client.web.app/">Live website link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/creative-agency-client">Client side link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/creative-agency-server">Server side link</a>
                        </div>
                    </div>
                    <div className="shadow m-3 p-5">
                        <h4>⮚ Volunteer Network</h4>
                        <p className="ml-5">I’ve made it for only the client site project. In this project a client can action his activities and his  activities store in the database.</p>
                        <h5 className="ml-3">Here I  used</h5>
                        <h6 className="ml-5">HTML5, CSS3, ES6, React, Bootstrap, MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</h6>
                        <h5 className="ml-3">You can visit repositories</h5>
                        <div>
                            <a className="bg-white m-1 p-1  rounded" href="https://volunteer-network-22cfc.web.app/">Live website link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/volunteer-network-client">Client side link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/volunteer-network-server">Server side link</a>
                        </div>
                    </div>
                    <div className="shadow m-3 p-5">
                        <h4>⮚ Red Onion</h4>
                        <p className="ml-5">I’ve made it for only the client site project.</p>
                        <h5 className="ml-3">Here I  used</h5>
                        <h6 className="ml-5">I’ve made it for only the client site project.</h6>
                        <h5 className="ml-3">You can visit repositories</h5>
                        <div>
                            <a className="bg-white m-1 p-1  rounded" href="https://red-onion-restaurant-2611b.web.app/">Live website link</a>
                            <a className="bg-white m-1 p-1  rounded" href=" https://github.com/mjrgeorge/red-onion-restaurant">Client side link</a>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <h3 className="text-info mb-4">Languages</h3>
                    <p className="ml-3">Bengali and English</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default cv;