import React from 'react';
import './Header.css';
import jubayer from '../../../images/jubayer.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className="header_wrap text-capitalize">
                <div className="left_side">
                    <h1>hello i'm</h1>
                    <h2 className="text_highlight display-4">Jubayer Rahman</h2>
                    <p>You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that
                    work. That's why I am learning and mastering web development. I will not stop until I become the Web
                    Development Hero.</p>
                    <Link className="link_button" to="/contact">Hire me</Link>
                </div>
                <div className="right_side">
                    <img src={jubayer} alt="Jubayer" />
                </div>
            </section>
        </header>
    );
};

export default Header;