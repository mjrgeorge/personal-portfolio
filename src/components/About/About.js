import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
    <section className="container mb-4 p-4 shadow-lg">
            <h2 className="display-4 text-center text-dark">Skills</h2>
            <article className="row">
                <div className="col-lg-6 py-3 px-5">
                    <p className="h5 text-justify text-muted text-capitalize">I want to built-up my career as a Web Developer. I love to code modern and responsive layouts for web application. My core skill is based on JavaScript and I love to do most interesting things using React.Js And Node.Js. I think I have enough Knowledge In The HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.Js, React-Router, React-Bootstrap, Material-UI, Firebase, Netlify And Also Comfortable With Node.JS, Express.JS, MongoDB. I try to improve Myself in  Every moment. Optimizing My Work Flow In Every Step Of My Life. I Always try to Learn New Things And I Love to make New Things.</p>
                </div>
                <div className="col-lg-6 py-3 px-5">
                    <Skills />
                </div>
            </article>
        </section>
  )
}

export default About