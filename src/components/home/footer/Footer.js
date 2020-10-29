import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    return (
        <footer>
            <a className="icon" href="https://www.facebook.com/mjrgeorge/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="icon" href="https://twitter.com/mjrgeorge" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="icon" href="https://www.linkedin.com/in/jubayer-rahman-3776b21b1/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <br />
            <span>Copyright © 2020 mjrgeorge.</span>
        </footer>
    );
};

export default Footer;