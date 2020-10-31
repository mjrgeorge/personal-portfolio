import React from 'react';
import work_1 from '../../../images/latest-work/work_1.png';
import work_2 from '../../../images/latest-work/work_2.png';
import work_3 from '../../../images/latest-work/work_3.png';


const Main = () => {
    return (
        <main>
            <section>
                <h2 style={{ marginBottom: "5%", textAlign: "center" }}>My Latest Work</h2>
                <article className="work_wrap">
                    <div className="work_image">
                        <img className="w-100" src={work_1} alt="work1" />
                    </div>
                    <div className="work_image">
                        <img className="w-100" src={work_2} alt="work2" />
                    </div>
                    <div className="work_image">
                        <img className="w-100" src={work_3} alt="work3" />
                    </div>
                </article>
            </section>
            <section>
                <h2 className="text-center">Experiences</h2>
                <article className="experiences_wrap">
                    <div className="left_side">
                        <h3>Full Stack Web Developer</h3>
                        <h5 className="text-warning">2021-Present | Pro Level Developer</h5>
                        <p className="para_text">Really I am the master of HTML, CSS, SASS, Bootstrap, JavaScript, ES6, React.js, React-router, React-bootstrap, Material-UI, Firebase, Netlify, Node.JS, Express.JS, MongoDB. I know everything needed to make a website function, efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called Vue JS. I even know the deployment, server and security. I will give you 100% web solution.</p>
                    </div>
                    <div className="right_side">
                        <h3>Junior Web Developer</h3>
                        <h5 className="text-warning">2020-2021 | Programming Hero Learner</h5>
                        <p className="para_text">They didn't offer me a job. But I made myself as a remove web developer. I made their website and showed it to them. They liked it. And uploaded the content. It was fun working at Programming Hero.</p>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Main;