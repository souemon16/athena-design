import React from 'react';
import './Header.css';
import headerImg from '../../../Images/Illustration/16 [Converted]@2x.png';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <section className="header">
            <Navbar />
            <div className="container d-flex justify-content-between align-items-center">
                <div className="row">
                <div className="col-md-6">
                    <h1>Florence <br/> agency</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="btn see-pricing">See Pricing</button>
                </div>
                <div className="col-md-6">
                    <img src={headerImg} alt="header-img" className="img-fluid"/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Header;