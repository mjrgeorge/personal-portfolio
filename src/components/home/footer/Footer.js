import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="bg-transparent text-center">
            <a className="h4 m-2 text-info" href="https://www.linkedin.com/in/md-jubayer-rahman-george-3776b21b1/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="h4 m-2 text-info" href="mailto:mjrgeorge@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} /></a>
            <a className="h4 m-2 text-info" href="https://twitter.com/mjrgeorge" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="h4 m-2 text-info" href="https://github.com/mjrgeorge" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <h5 className="text-muted m-2">Copyright © {year} mjrgeorge.</h5>
        </footer>
    );
};

export default Footer;