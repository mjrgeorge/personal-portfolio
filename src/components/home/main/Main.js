import React from 'react';
import { Link } from 'react-router-dom';
import work_1 from '../../../images/latest-work/work_1.png';
import work_2 from '../../../images/latest-work/work_2.png';
import work_3 from '../../../images/latest-work/work_3.png';
import Information from '../../information/Information';

const Main = () => {
    return (
        <main>
            <section>
                <h2 className="text-center my-4">My Latest Work</h2>
                <Link to="/projects">
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
                </Link>
            </section>
            <Information/>
        </main>
    );
};

export default Main;