import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact-us container d-md-flex flex-column align-items-center">
            <div className="heading">
                <h2>Get your design right, right now</h2>
                <p>Be the first know our latest offers and updates!</p>
            </div>
            <div className="body">
                <input type="email" name="email" id="email" className="form-control" placeholder='Enter Your Email Address' />
                <button className="btn get-started">Get Started</button>
            </div>
        </section>
    );
};

export default ContactUs;