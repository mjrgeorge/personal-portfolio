import React from 'react';
import jubayer from '../../images/jubayer.png';
import Footer from '../home/footer/Footer';
import NavBar from '../home/navBar/NavBar';

const cv = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="resume">
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <div className="row">
                        <div className="col-md-3 text-left">
                            <img style={{ height: '120px', width: '100px' }} className="rounded-circle" src={jubayer} alt="jubayerRahman" />
                        </div>
                        <div className="col-md-5 text-center">
                            <h1>Jubayer Rahman</h1>
                            <h4>Full Stack Junior Web Developer</h4>
                            <a href="mailto:mjrgeorge@gmail.com">Email: mjrgeorge@gmail.com</a>
                        </div>
                        <div className="col-md-4 text-right">
                            <address>
                                Debiganj, Panchagarh– 5020
                        <br />
                        Rangpur, Bangladesh
                        <div>
                                    <a className="ml-3" href="tel:+8801841503316" target="_blank">Phone</a>
                                    <a className="ml-3" href="https://www.linkedin.com/in/md-jubayer-rahman-george-3776b21b1/" target="_blank">LinkedIn</a>
                                    <a className="ml-3" href="https://github.com/mjrgeorge" target="_blank">Github</a>
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
                        <ul className="ml-5">
                            <li>MERN project. This is an agency website where users can find many
                                services and can order any of the services.</li>
                            <li>Has user authentication. Users can login and see their ordered services.</li>
                            <li>Users can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                        <h5 className="ml-3">Here I  used</h5>
                        <h6 className="ml-5">HTML5, CSS3, ES6, React, Bootstrap, MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</h6>
                        <h5 className="ml-3">You can visit repositories</h5>
                        <div>
                            <a className="bg-white m-1 p-1  rounded" href="https://creative-agency-client.web.app/" target="_blank">Live website link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/creative-agency-client" target="_blank">Client side link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/creative-agency-server" target="_blank">Server side link</a>
                        </div>
                    </div>
                    <div className="shadow m-3 p-5">
                        <h4>⮚ Volunteer Network</h4>
                        <ul className="ml-5">
                            <li>Has user authentication. Users can login and see their ordered services.</li>
                            <li>Users can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                        <h5 className="ml-3">Here I  used</h5>
                        <h6 className="ml-5">HTML5, CSS3, ES6, React, Bootstrap, MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</h6>
                        <h5 className="ml-3">You can visit repositories</h5>
                        <div>
                            <a className="bg-white m-1 p-1  rounded" href="https://volunteer-network-22cfc.web.app/" target="_blank">Live website link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/volunteer-network-client" target="_blank">Client side link</a>
                            <a className="bg-white m-1 p-1  rounded" href="https://github.com/mjrgeorge/volunteer-network-server" target="_blank">Server side link</a>
                        </div>
                    </div>
                    <div className="shadow m-3 p-5">
                        <h4>⮚ Red Onion</h4>
                        <ul className="ml-5">
                            <li>Authenticated users can order foods .</li>
                            <li>U Automated calculation and functionalities are added for the cart .</li>
                            <li>Stripe payment method is available for testing purposes only .</li>
                        </ul>
                        <h5 className="ml-3">Here I  used</h5>
                        <h6 className="ml-5">I’ve made it for only the client site project.</h6>
                        <h5 className="ml-3">You can visit repositories</h5>
                        <div>
                            <a className="bg-white m-1 p-1  rounded" href="https://red-onion-restaurant-2611b.web.app/" target="_blank">Live website link</a>
                            <a className="bg-white m-1 p-1  rounded" href=" https://github.com/mjrgeorge/red-onion-restaurant" target="_blank">Client side link</a>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg mb-3 p-5 bg-white">
                    <h3 className="text-info mb-4">Languages</h3>
                    <p className="ml-3">Bengali and English</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default cv;