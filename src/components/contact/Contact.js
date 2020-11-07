import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../home/navBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneAlt, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import Footer from '../home/footer/Footer';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_pdv5r1m', e.target, 'user_gFp94HYTeS4e2LERlKmJe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="container">
            <NavBar />
            <div className="row m-4">
                <div className="col-md-6">
                    <div className="text-center text-danger font-weight-bold h6 contact-form shadow-lg m-3 bg-white rounded">
                        <div className="shadow p-4">
                            <big><p><FontAwesomeIcon icon={faPhoneAlt} /></p></big>
                            <p>Call Me On</p>
                            <p><a className="ml-3" href="tel:+8801841503316">+8801841503316</a></p>
                        </div>
                        <div className="shadow p-4">
                            <big><p><FontAwesomeIcon icon={faEnvelopeOpen} /></p></big>
                            <p>Email</p>
                            <p><a href="mailto:mjrgeorge@gmail.com">mjrgeorge@gmail.com</a></p>
                        </div>
                        <div className="shadow p-4">
                            <big><p><FontAwesomeIcon icon={faSearchLocation} /></p></big>
                            <p>Location</p>
                            <a href="#">Dhaka, Bangladesh</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form className="contact-form shadow-lg p-5 m-3 bg-white rounded" onSubmit={sendEmail}>
                        <div class="form-group pb-1">
                            <input className="form-control" type="hidden" name="contact_number" required />
                        </div>
                        <div class="form-group pb-1">
                            <label>Name</label>
                            <input className="form-control" type="text" name="user_name" required />
                        </div>
                        <div class="form-group pb-1">
                            <label>Email</label>
                            <input className="form-control" type="email" name="user_email" required />
                        </div>
                        <div class="form-group pb-1">
                            <label>Message</label>
                            <textarea className="form-control" name="message" cols="30" rows="3" required />
                        </div>
                        <div class="form-group pb-1">
                            <input className="btn btn-info btn-block" type="submit" value="Send" required />
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}