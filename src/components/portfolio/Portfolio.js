import React from 'react';
import project1 from '../../images/projects/project1.png';
import project2 from '../../images/projects/project2.png';
import project3 from '../../images/projects/project3.png';
import project4 from '../../images/projects/project4.png';

const Portfolio = () => {
    return (
        <div className="container">
            <div className="m-3">
                <h2 className="text-dark display-4 text-center">Portfolio</h2>
                <p className="text-muted h5 text-center">Some of my project work</p>
            </div>
            <div className="my-5">
                <div class="card-deck">
                    <div class="card zoom p-2 shadow">
                        <img src={project2} class="card-img-top" alt="work" />
                        <div class="card-body">
                            <h5 class="card-title">Creative Agency</h5>
                            <div className="d-flex flex-wrap">
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <a href="https://creative-agency-client.web.app/" class="card-link">Live</a>
                            <a href="https://github.com/mjrgeorge/creative-agency-client" class="card-link">Github</a>
                        </div>
                    </div>
                    <div class="card zoom p-2 shadow">
                        <img src={project1} class="card-img-top" alt="work" />
                        <div class="card-body">
                            <h5 class="card-title">Apartment Hunt</h5>
                            <div className="d-flex flex-wrap">
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <a href="https://apartment-hunt-8e374.web.app/" class="card-link">Live</a>
                            <a href="https://github.com/mjrgeorge/apartment-hunt" class="card-link">Github</a>
                        </div>
                    </div>
                    <div class="card zoom p-2 shadow">
                        <img src={project3} class="card-img-top" alt="work" />
                        <div class="card-body">
                            <h5 class="card-title">Volunteer Network</h5>
                            <div className="d-flex flex-wrap">
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <a href="https://volunteer-network-22cfc.web.app/" class="card-link">Live</a>
                            <a href="https://github.com/mjrgeorge/volunteer-network-client" class="card-link">Github</a>
                        </div>
                    </div>
                    <div class="card zoom p-2 shadow">
                        <img src={project4} class="card-img-top" alt="work" />
                        <div class="card-body">
                            <h5 class="card-title">Red Onion restaurant</h5>
                            <div className="d-flex flex-wrap">
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                                <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <a href="https://red-onion-restaurant-2611b.web.app/" class="card-link">Live</a>
                            <a href="https://github.com/mjrgeorge/red-onion-restaurant" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
