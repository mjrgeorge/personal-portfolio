import React from 'react';
import NavBar from '../home/navBar/NavBar';
import work_1 from '../../images/latest-work/work_1.png';
import work_2 from '../../images/latest-work/work_2.png';
import work_3 from '../../images/latest-work/work_3.png';

const Projects = () => {
    return (
        <>
            <NavBar />
            <div className="projects">
                <div className="row mb-2 p-4 shadow-lg">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={work_1} alt="project" />
                    </div>
                    <div className="col-md-5 p-4">
                        <h3>Creative Agency</h3>
                        <p className="pr-3">I’ve created a simple full-stack project. It has two portions, the Client panel, and the Admin  panel. Clients can't access the sensitive area of this site. But, the admin can access all areas.</p>
                    </div>
                    <div className="col-md-4 p-4">
                        <h3>Here I  used </h3>
                        <ul>
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap.</li>
                            <li>Backend: MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <ul>
                            <big><li><a href="https://creative-agency-client.web.app/">Live website</a></li></big>
                            <big><li><a href="https://github.com/mjrgeorge/creative-agency-client">Client side</a></li></big>
                            <big><li><a href="https://github.com/mjrgeorge/creative-agency-server">Server side</a></li></big>
                        </ul>
                    </div>
                </div>
                <div className="row mb-2 p-4 shadow-lg">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={work_2} alt="project" />
                    </div>
                    <div className="col-md-5 p-4">
                        <h3>Volunteer Network</h3>
                        <p className="pr-3">I’ve made it for only the client site project. In this project a client can action his activities and his  activities store in the database. </p>
                    </div>
                    <div className="col-md-4 p-4">
                        <h3>Here I  used </h3>
                        <ul>
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap.</li>
                            <li>Backend: MongoDB, ReST API, Node.JS, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <ul>
                            <big><li><a href="https://red-onion-restaurant-2611b.web.app">Live website</a></li></big>
                            <big><li><a href="https://github.com/mjrgeorge/volunteer-network-client">Client side</a></li></big>
                            <big><li><a href="https://github.com/mjrgeorge/volunteer-network-server">Server side</a></li></big>
                        </ul>
                    </div>
                </div>
                <div className="row mb-2 p-4 shadow-lg">
                    <div className="col-md-3 p-4">
                        <img className="img-fluid" src={work_3} alt="project" />
                    </div>
                    <div className="col-md-5 p-4">
                        <h3>Red Onion</h3>
                        <p className="pr-3">I’ve made it for only the client site project.</p>
                    </div>
                    <div className="col-md-4 p-4">
                        <h3>Here I  used </h3>
                        <ul>
                            <li>Frontend: HTML5, CSS3, ES6, React, Bootstrap, Firebase, Git, Heroku.</li>
                        </ul>
                        <h4>You can visit repositories</h4>
                        <ul>
                            <big><li><a href="https://red-onion-restaurant-2611b.web.app/">Live website</a></li></big>
                            <big><li><a href=" https://github.com/mjrgeorge/red-onion-restaurant">Client side</a></li></big>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;