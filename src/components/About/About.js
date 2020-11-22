import React from 'react';
import Skills from '../skills/Skills';

const About = () => {
    return (
        <section className="container mb-4 p-4 shadow-lg">
            <h2 className="display-4 text-center text-dark">Skills</h2>
            <article className="row">
                <div className="col-lg-6 py-3 px-5">
                    <p className="h4 text-justify text-muted text-capitalize">Expert in developing Single Page Application(SPA) using React.js and Node.js. I have a good knowledge in the HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify and also comfortable with Node.JS, Express.JS, MongoDB. I also improve myself everyday. I love always learning new things and I love creating new things.</p>
                </div>
                <div className="col-lg-6 py-3 px-5">
                    <Skills />
                </div>
            </article>
        </section>
    );
};

export default About;