import React from 'react';
import jubayer_1 from '../../../images/jubayer_1.png';
import work_1 from '../../../images/latest-work/work_1.png';
import work_2 from '../../../images/latest-work/work_2.jpg';
import work_3 from '../../../images/latest-work/work_3.jpg';


const Main = () => {
    return (
        <main>
        <section className="biograpy_wrap">
            <div className="left_side">
                    <img src={jubayer_1} alt="Jubayer"/>
            </div>
            <div className="right_side">
                <h2>biograpy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo similique iste totam aut! Tempore
                    id necessitatibus facere iure at tempora culpa voluptates? Natus tenetur repellat autem neque ex
                    enim corrupti similique voluptatum sequi dolorem. Quisquam tempore saepe aut possimus sint.</p>
                <a className="link_button" href="https://www.linkedin.com/in/jubayer-rahman-3776b21b1/" target="_blank">download cv</a>
            </div>
        </section>
        <section>
            <h2 style={{marginBottom: "5%", textAlign: "center"}}>My Latest Work</h2>
            <article className="work_wrap">
                <div className="work_image">
                        <img src={work_1} alt="work1"/>
                    </div>
                <div className="work_image">
                        <img src={work_2} alt="work2"/>
                    </div>
                <div className="work_image">
                        <img src={work_3} alt="work3"/>
                    </div>
            </article>
        </section>
        <section>
            <h2 style={{textAlign: "center"}}>experiences</h2>
            <article className="experiences_wrap">
                <div className="left_side">
                    <h3>Full Stack Web Developer</h3>
                    <h5 className="text_highlight">2021-Present | Pro Level Developer</h5>
                    <p>Really I am the master of HTML, CSS and Javascript. I know everything needed to make a website
                        function, efficient. I didn't stop with the web. I went beyond with most popular Javascript
                        framework called Vue JS. I even know the deployment, server and security. I will give you 100%
                        web solution.</p>
                </div>
                <div className="right_side">
                    <h3>Baby Web Developer</h3>
                    <h5 className="text_highlight">2020-2021 | Programming Hero Learner</h5>
                    <p>They didn't offer me a job. But I made myself as a remove web developer. I made their website and
                        showed it to them. They liked it. And uploaded the content. It was fun working at Programming
                        Hero.</p>
                </div>
            </article>
        </section>
        <section className="review_wrap">
            <h3>What Client are say</h3>
            <h4>Bruce Moccy</h4>
            <h5 className="text_highlight">Founder & CEO Alies</h5>
            <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos labore illo facilis! Mollitia
                voluptate ducimus ipsa?"</p>
        </section>
    </main>
    );
};

export default Main;