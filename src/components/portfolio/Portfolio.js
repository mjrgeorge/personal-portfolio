import React from 'react';
import project1 from '../../images/projects/project1.png';
import project2 from '../../images/projects/project2.png';
import project3 from '../../images/projects/project3.png';
import project4 from '../../images/projects/project4.png';
import project5 from '../../images/projects/project5.png';

const Portfolio = () => {
    return (
        <div className="container">
            <div className="m-3">
                <h2 className="text-dark display-4 text-center">Portfolio</h2>
                <p className="text-muted h5 text-center">Some of my project work</p>
            </div>
            <div className="card-columns my-3">
                <div className="card mx-auto mt-5">
                    <img src={project1} className="card-img-top" alt="work" />
                    <div className="card-body">
                        <h5 className="card-title">Apartment Hunt</h5>
                        <div className="d-flex flex-wrap">
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#HTML</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#CSS</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <a href="https://apartment-hunt-8e374.web.app/" className="card-link">Live</a>
                        <a href="https://github.com/mjrgeorge/apartment-hunt" className="card-link">Github</a>
                    </div>
                </div>
                <div className="card mx-auto mt-5">
                    <img src={project2} className="card-img-top" alt="work" />
                    <div className="card-body">
                        <h5 className="card-title">Creative Agency</h5>
                        <div className="d-flex flex-wrap">
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#HTML</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#CSS</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <a href="https://creative-agency-client.web.app/" className="card-link">Live</a>
                        <a href="https://github.com/mjrgeorge/creative-agency-client" className="card-link">Github</a>
                    </div>
                </div>
                <div className="card mx-auto mt-5">
                    <img src={project3} className="card-img-top" alt="work" />
                    <div className="card-body">
                        <h5 className="card-title">Volunteer Network</h5>
                        <div className="d-flex flex-wrap">
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#HTML</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#CSS</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Node</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Express</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Mongodb</span>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <a href="https://volunteer-network-22cfc.web.app/" className="card-link">Live</a>
                        <a href="https://github.com/mjrgeorge/volunteer-network-client" className="card-link">Github</a>
                    </div>
                </div>
                <div className="card mx-auto mt-5">
                    <img src={project4} className="card-img-top" alt="work" />
                    <div className="card-body">
                        <h5 className="card-title">Red Onion restaurant</h5>
                        <div className="d-flex flex-wrap">
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#HTML</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#CSS</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <a href="https://red-onion-restaurant-2611b.web.app/" className="card-link">Live</a>
                        <a href="https://github.com/mjrgeorge/red-onion-restaurant" className="card-link">Github</a>
                    </div>
                </div>
                <div className="card mx-auto mt-5">
                    <img src={project5} className="card-img-top" alt="work" />
                    <div className="card-body">
                        <h5 className="card-title">Athena Design</h5>
                        <div className="d-flex flex-wrap">
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#HTML</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#CSS</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#Bootstrap</span>
                            <span className="bg-dark px-2 m-2 text-white rounded-pill">#React</span>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <a href="https://athena-design-react.netlify.app/" className="card-link">Live</a>
                        <a href="https://github.com/faisalcep/athena-design" className="card-link">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
