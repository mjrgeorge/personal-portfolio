import React from 'react';
import NavBar from '../home/navBar/NavBar';
import work_1 from '../../images/latest-work/work_1.png';
import work_2 from '../../images/latest-work/work_2.png';
import work_3 from '../../images/latest-work/work_3.png';
import Footer from '../home/footer/Footer';

const Projects = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="projects font-weight-bold bg-white">
                <div className="row mb-2 shadow-lg p-3">
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={work_1} alt="project" />
                    </div>
                    <div className="col-md-4">
                        <h3>Creative Agency</h3>
                        <ul className="pl-4">
                            <li>MERN project. This is an agency website where users can find many
                                services and can order any of the services.</li>
                            <li>Has user authentication. Users can login and see their ordered services.</li>
                            <li>Users can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h3>Here I  used </h3>
                        <ul className="pl-4">
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap.</li>
                            <li>Backend: MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://creative-agency-client.web.app/" target="_blank">Live website</a>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/creative-agency-client" target="_blank">Client side</a>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/creative-agency-server" target="_blank">Server side</a>
                    </div>
                </div>
                <div className="row mb-2 shadow-lg p-3">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={work_2} alt="project" />
                    </div>
                    <div className="col-md-4">
                        <h3>Volunteer Network</h3>
                        <ul className="pl-4">
                            <li>Has user authentication. Users can login and see their ordered services.</li>
                            <li>Users can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h3>Here I  used </h3>
                        <ul className="pl-4">
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap.</li>
                            <li>Backend: MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://red-onion-restaurant-2611b.web.app" target="_blank">Live website</a>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/volunteer-network-client" target="_blank">Client side</a>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/volunteer-network-server" target="_blank">Server side</a>
                    </div>
                </div>
                <div className="row mb-2 shadow-lg p-3">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={work_3} alt="project" />
                    </div>
                    <div className="col-md-4">
                        <h3>Red Onion</h3>
                        <ul className="pl-4">
                            <li>Authenticated users can order foods .</li>
                            <li>U Automated calculation and functionalities are added for the cart .</li>
                            <li>Stripe payment method is available for testing purposes only .</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h3>Here I  used </h3>
                        <ul className="pl-4">
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href="https://red-onion-restaurant-2611b.web.app/" target="_blank">Live website</a>
                        <a className="btn btn-outline-info font-weight-bold mr-1" href=" https://github.com/mjrgeorge/red-onion-restaurant" target="_blank">Client side</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;