import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer>
            <span>© 2020 mjrgeorge Ltd. All rights reserved.</span>
            <br />
            <a className="icon" href="https://www.facebook.com/mjrgeorge/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a className="icon" href="https://twitter.com/mjrgeorge" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="icon" href="https://www.linkedin.com/in/jubayer-rahman-3776b21b1/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </footer>
    );
};

export default Footer;