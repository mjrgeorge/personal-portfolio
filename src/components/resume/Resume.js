import React from 'react';
import jubayer from '../../images/jubayer.png';

const Resume = () => {
    return (
        <div className="container">
                <div className="shadow-lg px-5 py-3 my-3">
                    <div className="row">
                        <div className="col-md-3 text-left">
                            <img style={{ height: '120px', width: '100px' }} className="rounded-circle" src={jubayer} alt="jubayerRahman" />
                        </div>
                        <div className="col-md-5 text-center">
                            <h1>Jubayer Rahman</h1>
                            <h4>MERN Stack Web Developer</h4>
                            <a href="mailto:mjrgeorge@gmail.com">Email: mjrgeorge@gmail.com</a>
                        </div>
                        <div className="col-md-4 text-right">
                            <address>
                                Debiganj, Panchagarh– 5020
                        <br />
                        Rangpur, Bangladesh
                        <br />
                                <a href="tel:+8801841503316" target="_blank">+8801841503316</a>
                                <div>
                                    <a href="https://mjrgeorge.netlify.app/" target="_blank">Website</a>
                                    <a className="mx-3" href="https://www.linkedin.com/in/md-jubayer-rahman-george-3776b21b1/" target="_blank">LinkedIn</a>
                                    <a href="https://github.com/mjrgeorge" target="_blank">Github</a>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg px-5 py-3 my-3">
                    <h3 className="text-info">Career Object</h3>
                    <p className="text-muted text-justify pl-4">To work in a professional environment for getting the opportunity to utilize my knowledge, creativity as well as technical experiences to attain the organization goal and to build up my career in the field of communication sector.</p>
                </div>
                <div className="shadow-lg px-5 py-3 my-3">
                    <h3 className="text-info">Programming Skills</h3>
                    <div className="pl-4">
                        <h4>⮚ Good At :</h4>
                        <p className="text-muted text-justify">HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify. </p>
                        <h4>⮚ Comfortable :</h4>
                        <p className="text-muted"> NodeJS, Express JS, MongoDB, Heroku</p>
                        <h4>⮚ Tools :</h4>
                        <p className="text-muted">GitHub, Chrome Dev Tools, VS Codes </p>
                    </div>
                </div>
                <div className="shadow-lg px-5 py-3 my-3">
                    <h3 className="text-info">Projects</h3>
                    <div className="shadow p-4 my-3">
                        <h4>⮚ Apartment Hunt</h4>
                        <p className="text-muted text-justify">Responsive MERN Stack project with firebase authentication, admin authentication, persistent login and dashboard functionality for customer and admin. Client have ability to request booking for apartment, check status of requested booking from client dashboard. Only admin can update the client requested booking status from pending to on going to done , add new apartment/house with image, all the apartment details and add new admin. Sign in is required to request booking for any apartment or to view client dashboard with services status.</p>
                        <h5>Here I  used</h5>
                        <p className="text-muted text-justify">React JS, Firebase Authentication, React Router, Private Router, React Hook Form, Redux, React Redux, redux-devtools-extension, redux-thunk, React Context API,React Hook,Firebase Hosting, Session Storage, React Spinners, Bootstrap, SCSS, FontAwesome, Node JS, Express JS, Express file upload, Mongodb, Heroku, Cors, Body parser, Dotenv, nodemon.</p>
                        <h5>You can visit repositories :</h5>
                        <div>
                            <a className="btn btn-outline-info m-1" href="https://apartment-hunt-8e374.web.app/" target="_blank">Live Preview</a>
                            <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/apartment-hunt" target="_blank">Client Side</a>
                            <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/apartment-hunt-server" target="_blank">Server Side</a>
                        </div>
                    </div>
                    <div className="shadow p-4 my-3">
                        <h4>⮚ Creative Agency</h4>
                        <p className="text-muted text-justify">MERN project. This is an agency website where users can find many services and can order any of the services. Has user authentication. Users can login and see their ordered services. Users can give reviews about their ordered services.Admin can manage ordered services. Can add New services.</p>
                        <h5>Here I  used</h5>
                        <p className="text-muted text-justify">React JS, Firebase Authentication, React Router, Private Router, React Hook Form, React Context API,React Hook,Firebase Hosting, Bootstrap, FontAwesome, Node JS, Express JS, Express file upload, Mongodb, Heroku, Cors, Body parser, Dotenv, nodemon.</p>
                        <h5>You can visit repositories :</h5>
                        <div>
                            <a className="btn btn-outline-info m-1" href="https://creative-agency-client.web.app/" target="_blank">Live Preview</a>
                            <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/creative-agency-client" target="_blank">Client Side</a>
                            <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/creative-agency-server" target="_blank">Server Side</a>
                        </div>
                    </div>
                    <div className="shadow p-4 my-3">
                        <h4>⮚ Volunteer Network</h4>
                        <p className="text-muted text-justify">Has user authentication. Users can login and see their ordered services. Users can give reviews about their ordered services. Admin can manage ordered services. Can add New services.</p>
                        <h5>Here I  used</h5>
                        <p className="text-muted text-justify">React JS, Firebase Authentication, React Router, Private Router, React Hook Form, React Context API,React Hook,Firebase Hosting, Bootstrap, FontAwesome, Node JS, Express JS, Express file upload, Mongodb, Heroku, Cors, Body parser, Dotenv, nodemon.</p>
                        <h5>You can visit repositories :</h5>
                        <div>
                            <a className="btn btn-outline-info m-1" href="https://volunteer-network-22cfc.web.app/" target="_blank">Live Preview</a>
                            <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/volunteer-network-client" target="_blank">Client Side</a>
                            <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/volunteer-network-server" target="_blank">Server Side</a>
                        </div>
                    </div>
                    <div className="shadow p-4 my-3">
                        <h4>⮚ Red Onion</h4>
                        <p className="text-muted text-justify">Authenticated users can order foods. U Automated calculation and functionalities are added for the cart. Google Location API use testing purposes only.</p>
                        <h5>Here I  used</h5>
                        <p className="text-muted text-justify">React JS, Firebase Authentication, React Router, Private Router, React Hook Form, React Context API,React Hook,Firebase Hosting, Bootstrap, FontAwesome.</p>
                        <h5>You can visit repositories :</h5>
                        <div>
                            <a className="btn btn-outline-info m-1" href="https://red-onion-restaurant-2611b.web.app/" target="_blank">Live Preview</a>
                            <a className="btn btn-outline-info m-1" href=" https://github.com/mjrgeorge/red-onion-restaurant" target="_blank">Client Side</a>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg px-5 py-3 my-3">
                    <h3 className="text-info">Languages</h3>
                    <p className="text-muted pl-4">Bengali and English</p>
                </div>
        </div>
    );
};

export default Resume;