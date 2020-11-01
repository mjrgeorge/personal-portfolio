import React from 'react';
import NavBar from '../home/navBar/NavBar';
import work_1 from '../../images/latest-work/work_1.png';
import work_2 from '../../images/latest-work/work_2.png';
import work_3 from '../../images/latest-work/work_3.png';
import Footer from '../home/footer/Footer';

const Projects = () => {
    return (
        <>
            <NavBar />
            <div className="projects font-weight-bold bg-white">
                <div className="row mb-2 p-4 shadow-lg">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={work_1} alt="project" />
                    </div>
                    <div className="col-md-5 p-4">
                        <h3>Creative Agency</h3>
                        <ul className="pl-3">
                            <li>MERN project. This is an agency website where users can find many
                                services and can order any of the services.</li>
                            <li>Has user authentication. Users can login and see their ordered services.</li>
                            <li>Users can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-4">
                        <h3>Here I  used </h3>
                        <ul className="pr-3">
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap.</li>
                            <li>Backend: MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://creative-agency-client.web.app/">Live website</a></big>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/creative-agency-client">Client side</a></big>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/creative-agency-server">Server side</a></big>
                    </div>
                </div>
                <div className="row mb-2 p-4 shadow-lg">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={work_2} alt="project" />
                    </div>
                    <div className="col-md-5 p-4">
                        <h3>Volunteer Network</h3>
                        <ul className="pl-3">
                            <li>Has user authentication. Users can login and see their ordered services.</li>
                            <li>Users can give reviews about their ordered services.</li>
                            <li>Admin can manage ordered services. Can add New services.</li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-4">
                        <h3>Here I  used </h3>
                        <ul>
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap.</li>
                            <li>Backend: MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://red-onion-restaurant-2611b.web.app">Live website</a></big>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/volunteer-network-client">Client side</a></big>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://github.com/mjrgeorge/volunteer-network-server">Server side</a></big>
                    </div>
                </div>
                <div className="row mb-2 p-4 shadow-lg">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={work_3} alt="project" />
                    </div>
                    <div className="col-md-5 p-4">
                        <h3>Red Onion</h3>
                        <h3>Here I  used </h3>
                        <ul>
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href="https://red-onion-restaurant-2611b.web.app/">Live website</a></big>
                        <big><a className="btn btn-outline-info font-weight-bold mr-1" href=" https://github.com/mjrgeorge/red-onion-restaurant">Client side</a></big>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;