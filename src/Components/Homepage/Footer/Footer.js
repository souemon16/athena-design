import React from 'react';
import './Footer.css';
import logo from '../../../Images/Illustration/Group 86.png';
import fb from '../../../Images/Illustration/facebook-logo-in-circular-shape@2x.png';
import twtr from '../../../Images/Illustration/twitter (4)@2x.png';
import linkdin from '../../../Images/Illustration/linkedin (2)@2x.png';
import dribble from '../../../Images/Illustration/dribbble (1)@2x.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer container'>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-4">
                    <img src={logo} alt="logo"/>
                    <div className="social-icons d-flex justify-content-between align-items-center">
                        <img src={fb} alt="social logo" />
                        <img src={twtr} alt="social logo" />
                        <img src={linkdin} alt="social logo" />
                        <img src={dribble} alt="social logo" />
                    </div>
                </div>

                <div className="col-md-2">
                    <Link className='link' to=''><p>Features</p></Link>
                    <Link className='link' to=''><p>Enterprise</p></Link>
                    <Link className='link' to=''><p>Pricing</p></Link>
                </div>

                <div className="col-md-2">
                    <Link className='link' to=''><p>Blog</p></Link>
                    <Link className='link' to=''><p>Help Center</p></Link>
                    <Link className='link' to=''><p>Contact Us</p></Link>
                    <Link className='link' to=''><p>Status</p></Link>
                </div>

                <div className="col-md-3">
                    <Link className='link' to=''><p>About Us</p></Link>
                    <Link className='link' to=''><p>Terms of Service</p></Link>
                    <Link className='link' to=''><p>Security</p></Link>
                    <Link className='link' to=''><p>Login</p></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;