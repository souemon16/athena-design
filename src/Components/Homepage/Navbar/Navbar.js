import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../Images/Illustration/Group 86.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    // const navSlide = () => {
    //     const bar = document.querySelector('.bar');
    //     const navItem = document.querySelector('.nav-items');

    //     bar.addEventListener('click', ()=> {
    //         navItem.classList.toggle('nav-active');
    //     })
    // }
    // navSlide();
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" className='img-fluid'/>
            </div>

            <div className="nav-items d-flex justify-content-around align-items-center">
                <ul className='d-flex justify-content-center align-items-center'>
                    <li><Link className='nav-links' to=''>Home</Link></li>
                    <li><Link className='nav-links' to=''>About</Link></li>
                    <li><Link className='nav-links' to=''>Service</Link></li>
                    <li><Link className='nav-links' to=''>Pricing</Link></li>
                    <li><Link className='nav-links' to=''>Our Team</Link></li>
                    <li> <button className="btn contact-us">Contact Us</button></li>
                </ul>
            </div>
            <div className="nav-icon">
                 <FontAwesomeIcon className='bar' icon={faBars} />
                </div>
        </nav>
    );
};

export default Navbar;