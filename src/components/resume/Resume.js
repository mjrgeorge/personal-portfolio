import React from 'react';
import jubayer from '../../images/jubayer.jpg';

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
                <h3 className="text-info">Career Objective</h3>
                <p className="text-muted text-justify pl-4">A self-motivated and tech enthusiast MERN stack web developer with a deep interest in JavaScript. To gain confidence and excellence using my potential in the field of “Web Development”, and express my innovative creative skills for self and company growth.</p>
            </div>
            <div className="shadow-lg px-5 py-3 my-3">
                <h3 className="text-info">Experience</h3>
                <h5 className="pl-4">Front End Developer</h5>
                <h6 className="pl-4">eSchool Journey Pvt Ltd</h6>
                <p className="text-muted pl-4">March 2021 - Present</p>
            </div>
            <div className="shadow-lg px-5 py-3 my-3">
                <h3 className="text-info">Programming Skills</h3>
                <div className="pl-4">
                    <h4>⮚ Good At :</h4>
                    <p className="text-muted text-justify">HTML, CSS3, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify. </p>
                    <h4>⮚ Comfortable :</h4>
                    <p className="text-muted"> NodeJS, Express JS, MongoDB, Heroku</p>
                    <h4>⮚ Tools :</h4>
                    <p className="text-muted">GitHub, Chrome Dev Tools, VS Codes </p>
                </div>
            </div>
            <div className="shadow-lg px-5 py-3 my-3">
                <h3 className="text-info">Projects</h3>
                <div className="shadow p-4 my-3">
                    <h4>􀀀 Apartment Hunt (A website for an apartment rental service)</h4>
                    <p className="text-muted text-justify">Responsive MERN Stack project with firebase authentication, admin authentication, persistent login and dashboard functionality for customer and admin. Client have ability to request booking for apartment, check status of requested booking from client dashboard. Only admin can update the client requested booking status from pending to on going to done , add new apartment/house with image, all the apartment details and add new admin. Sign in is required to request booking for any apartment or to view client dashboard with services status.</p>
                    <h5>Here I used</h5>
                    <p className="text-muted text-justify">CSS3, Bootstrap, JavaScript, React JS, Firebase Authentication, React Router, Private Router, React Hook Form, Redux, React Redux, redux-devtools-extension, redux-thunk, React Context API,React Hook,Firebase Hosting, Session Storage, React Spinners, Bootstrap, SCSS3, FontAwesome, Node JS, Express JS, Express file upload, Mongodb, Heroku, Cors, Body parser, Dotenv, nodemon.</p>
                    <h5>You can visit repositories :</h5>
                    <div>
                        <a className="btn btn-outline-info m-1" href="https://apartment-hunt-8e374.web.app/" target="_blank">Live Preview</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/apartment-hunt" target="_blank">Client Side</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/apartment-hunt-server" target="_blank">Server Side</a>
                    </div>
                </div>
                <div className="shadow p-4 my-3">
                    <h4>􀀀 Creative Agency (A website for a software agency)</h4>
                    <p className="text-muted text-justify">MERN project. This is an agency website where users can find many services and can order any of the services. Has user authentication. Users can login and see their ordered services. Users can give reviews about their ordered services.Admin can manage ordered services. Can add New services.</p>
                    <h5>Here I used</h5>
                    <p className="text-muted text-justify">CSS3, Bootstrap, JavaScript, React JS, Firebase Authentication, React Router, Private Router, React Hook Form, React Context API,React Hook,Firebase Hosting, Bootstrap, FontAwesome, Node JS, Express JS, Express file upload, Mongodb, Heroku, Cors, Body parser, Dotenv, nodemon.</p>
                    <h5>You can visit repositories :</h5>
                    <div>
                        <a className="btn btn-outline-info m-1" href="https://creative-agency-client.web.app/" target="_blank">Live Preview</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/creative-agency-client" target="_blank">Client Side</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/creative-agency-server" target="_blank">Server Side</a>
                    </div>
                </div>
                <div className="shadow p-4 my-3">
                    <h4>􀀀 Volunteer Network (A volunteer management website)</h4>
                    <p className="text-muted text-justify">Has user authentication. Users can login and see their ordered services. Users can give reviews about their ordered services. Admin can manage ordered services. Can add New services.</p>
                    <h5>Here I used</h5>
                    <p className="text-muted text-justify">CSS3, Bootstrap, JavaScript, React JS, Firebase Authentication, React Router, Private Router, React Hook Form, React Context API,React Hook,Firebase Hosting, Bootstrap, FontAwesome, Node JS, Express JS, Express file upload, Mongodb, Heroku, Cors, Body parser, Dotenv, nodemon.</p>
                    <h5>You can visit repositories :</h5>
                    <div>
                        <a className="btn btn-outline-info m-1" href="https://volunteer-network-22cfc.web.app/" target="_blank">Live Preview</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/volunteer-network-client" target="_blank">Client Side</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/volunteer-network-server" target="_blank">Server Side</a>
                    </div>
                </div>
                <div className="shadow p-4 my-3">
                    <h4>􀀀 Red Onion (Dynamic website for online food delivery system)</h4>
                    <p className="text-muted text-justify">Authenticated users can order foods. U Automated calculation and functionalities are added for the cart. Google Location API use testing purposes only.</p>
                    <h5>Here I used</h5>
                    <p className="text-muted text-justify">CSS3, Bootstrap, JavaScript, React JS, Firebase Authentication, React Router, Private Router, React Hook Form, React Context API,React Hook,Firebase Hosting, Bootstrap, FontAwesome.</p>
                    <h5>You can visit repositories :</h5>
                    <div>
                        <a className="btn btn-outline-info m-1" href="https://red-onion-restaurant-2611b.web.app/" target="_blank">Live Preview</a>
                        <a className="btn btn-outline-info m-1" href=" https://github.com/mjrgeorge/red-onion-restaurant" target="_blank">Client Side</a>
                    </div>
                </div>
            </div>
            <div className="shadow-lg px-5 py-3 my-3">
                <h3 className="text-info">Team Projects</h3>
                <div className="shadow p-4 my-3">
                    <h4>􀀀 Athena Design (Responsive Design service provider website)</h4>
                    <p className="text-muted text-justify">Responsive Design service provider application with react.js, bootstrap and CSS3. Client can check what services are available. Client also can check the price of the dedicated designer team. The application is completely responsive so client will have better user experience in smart devices.</p>
                    <h5>Here I used</h5>
                    <p className="text-muted text-justify">CSS3, Bootstrap, React JS</p>
                    <h5>You can visit repositories :</h5>
                    <div>
                        <a className="btn btn-outline-info m-1" href="https://athena-design-react.netlify.app/" target="_blank">Live Preview</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/faisalcep/athena-design" target="_blank">Client Side</a>
                    </div>
                </div>
                <div className="shadow p-4 my-3">
                    <h4>􀀀 Redux-Contact-Book </h4>
                    <p className="text-muted text-justify">This Redux Contact Book Website. User can see their contact information in there, such as name, phone , email Users can add new contacts. They can update their contact information. They can also delete unnecessary contact from the contact book.</p>
                    <h5>Here I used</h5>
                    <p className="text-muted text-justify">CSS3, Bootstrap, JavaScript, React JS, React Router, Private Router, Redux, Netlify.</p>
                    <h5>You can visit repositories :</h5>
                    <div>
                        <a className="btn btn-outline-info m-1" href="https://admiring-tereshkova-839887.netlify.app/" target="_blank">Live Preview</a>
                        <a className="btn btn-outline-info m-1" href="https://github.com/mjrgeorge/redux-contact-book.git" target="_blank">Client Side</a>
                    </div>
                </div>
            </div>
            <div className="shadow-lg px-5 py-3 my-3">
                <h3 className="text-info">Languages</h3>
                <p className="text-muted pl-4">Bangla - Native Bengali</p>
                <p className="text-muted pl-4">English - Full Working Knowledge</p>
            </div>
        </div>
    );
};

export default Resume;