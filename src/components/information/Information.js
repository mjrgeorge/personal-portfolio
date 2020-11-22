import React from 'react';
import Footer from '../home/footer/Footer';
import NavBar from '../home/navBar/NavBar';
import Skills from '../skills/Skills';

const Information = () => {
    return (
        <section>
            <NavBar/>
            <h2 className="text-center pb-4">Information</h2>
            <article className="information_wrap">
                <div className="left_side p-4">
                    <Skills />
                </div>
                <div className="right_side p-4">
                    <h3 className="text-center"><em>MERN</em> Stack Web Developer</h3>
                    <p className="para_text text-capitalize">Expert in developing Single Page Application(SPA) using React.js and Node.js. I have a good knowledge in the HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify and also comfortable with Node.JS, Express.JS, MongoDB. I also improve myself everyday, optimizing my work flow in every step of my life. I love always learning new things and I love creating new things. I like things clean and organized.</p>
                </div>
            </article><Footer/>
        </section>
    );
};

export default Information;