import React from 'react';
import html from '../../images/icons/html.png';
import css from '../../images/icons/css.png';
import sass from '../../images/icons/sass.png';
import js from '../../images/icons/js.png';
import react from '../../images/icons/react.png';
import bootstrap from '../../images/icons/bootstrap.png';
import node from '../../images/icons/nodejs.png';
import express from '../../images/icons/express.png';
import mongo from '../../images/icons/mongodb.png';
import material from '../../images/icons/meta-ui.png';
import heroku from '../../images/icons/heroku.png';
import netlify from '../../images/icons/netlify.png';
import firebase from '../../images/icons/firebase.png';

const Skills = () => {
    return (
        <div className="container text-center">
            <div>
                <h3>SKILLS</h3>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div>
                    <img className="mx-3 my-2" style={{ width: '50px' }} src={html} alt="" />
                    <figcaption style={{ marginTop: '5px' }}>HTML</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '46px' }} src={css} alt="" />
                    <figcaption style={{ marginTop: '4px' }}>CSS</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '67px' }} src={bootstrap} alt="" />
                    <figcaption>Bootstrap</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '40px', paddingTop: '8px' }} src={js} alt="" />
                    <figcaption style={{ marginTop: '7px' }}>JavaScript</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '50px' }} src={react} alt="" />
                    <figcaption style={{ marginTop: '4px' }}>React</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '45px', paddingTop: '15px' }} src={material} alt="" />
                    <figcaption style={{ marginTop: '9px' }}>Material-UI</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '55px', paddingTop: '10px' }} src={sass} alt="" />
                    <figcaption style={{ marginTop: '4px' }}>Sass</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '43px' }} src={node} alt="" />
                    <figcaption style={{ marginTop: '13px' }}>Node.js</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '55px' }} src={express} alt="" />
                    <figcaption style={{ marginTop: '6px' }}>Express.js</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '60px' }} src={mongo} alt="" />
                    <figcaption>MongoDB</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '38px' }} src={firebase} alt="" />
                    <figcaption style={{ marginTop: '8px' }}>Firebase</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '48px' }} src={netlify} alt="" />
                    <figcaption style={{ marginTop: '12px' }}>Netlify</figcaption>
                </div>
                <div>
                    <img className="mx-3 my-2" style={{ width: '50px' }} src={heroku} alt="" />
                    <figcaption style={{ marginTop: '10px' }}>Heroku</figcaption>
                </div>
            </div>
        </div>
    );
};

export default Skills;