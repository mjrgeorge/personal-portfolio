import React from 'react'
import Skills from './Skills'

const About = () => {
  return (
    <section className="container mb-4 p-4 shadow-lg">
            <h2 className="display-4 text-center text-dark">Skills</h2>
            <article className="row">
                <div className="col-lg-6 py-3 px-5">
                  <p className="h5 text-justify text-muted text-capitalize">I possess a strong foundation in HTML, CSS, SASS, and Bootstrap for styling and layout, along with expertise in JavaScript (including ES6), React.js, React-Router, React-Bootstrap, and Material-UI for front-end development. My back-end development skills include proficiency in Node.js, Express.js, and MongoDB, complemented by experience with Firebase and Netlify for deployment and backend services. Additionally, I am skilled in PostgreSQL for database management, Next.js for server-side rendering and static site generation, Redux for state management, TypeScript for enhancing JavaScript with type safety, Prisma for database ORM, GraphQL for efficient API querying, and React Native for mobile application development. My commitment to continuous learning and innovation ensures that I stay at the forefront of web development technologies and best practices.</p>
                </div>
                <div className="col-lg-6 py-3 px-5">
                    <Skills />
                </div>
            </article>
        </section>
  )
}

export default About