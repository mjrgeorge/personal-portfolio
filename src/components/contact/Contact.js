import React from 'react';
import emailjs from 'emailjs-com';
import NavBar from '../home/navBar/NavBar';
import message from '../../images/message.png'

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
        <>
            <NavBar />
            <div className="row m-5">
                <div className="col-md-6">
                    <img className="p-5 img-fluid" src={message} alt="message" />
                </div>
                <div className="col-md-6">
                    <form className="contact-form shadow-lg p-5 m-3 bg-white rounded" onSubmit={sendEmail}>
                        <div class="form-group">
                            <input className="form-control" type="hidden" name="contact_number" />
                        </div>
                        <div class="form-group">
                            <label>Name</label>
                            <input className="form-control" type="text" name="user_name" />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" name="user_email" />
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="message" cols="30" rows="3" />
                        </div>
                        <div class="form-group">
                            <input className="btn btn-info btn-block" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}