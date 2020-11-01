import React from 'react';
import Skills from '../skills/Skills';

const Information = () => {
    return (
        <section>
            <h2 className="text-center my-4">Information</h2>
            <article className="information_wrap">
                <div className="left_side p-4">
                    <h3>Full Stack Web Developer</h3>
                    <p className="para_text text-capitalize">Really I am the master of HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify, Node.JS, Express.JS, MongoDB. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
                </div>
                <div className="right_side p-4">
                    <Skills />
                </div>
            </article>
        </section>
    );
};

export default Information;