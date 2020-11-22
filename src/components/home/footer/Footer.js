import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="my-5 bg-transparent text-center">
            <a className="icon mr-3" href="https://www.linkedin.com/in/md-jubayer-rahman-george-3776b21b1/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className="icon mr-3" href="mailto:mjrgeorge@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen} /></a>
            <a className="icon mr-3" href="https://twitter.com/mjrgeorge" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="icon" href="https://github.com/mjrgeorge" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <br />
            <span>Copyright © {year} mjrgeorge.</span>
        </footer>
    );
};

export default Footer;