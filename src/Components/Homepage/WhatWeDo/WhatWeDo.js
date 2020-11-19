import React from 'react';
import './WhatWeDo.css';
import icon1 from '../../../Images/Illustration/Group 65@2x.png';
import icon2 from '../../../Images/Illustration/Group 66@2x.png';
import icon3 from '../../../Images/Illustration/Group 69@2x.png';
import icon4 from '../../../Images/Illustration/Group 72@2x.png';

const WhatWeDo = () => {
    return (
        <section className="what-we-do d-flex flex-column align-items-center justify-content-around">
            <div className="heading">
                <h2>What we do</h2>
                <p>Our main focus is the User Experience very <br/> simple and easy. Simplicity and Strength</p>
            </div>
            <div className="our-facalities container">
                <div className="row d-flex align-items-center justify-content-center">
                <div className="card d-flex flex-column align-items-center justify-content-center">
                    <img src={icon1} alt="icon"/>
                    <h4>Experience Design</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                <div className="card d-flex flex-column align-items-center justify-content-center">
                    <img src={icon2} alt="icon"/>
                    <h4>Interface Design</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                <div className="card d-flex flex-column align-items-center justify-content-center">
                    <img src={icon3} alt="icon"/>
                    <h4>Prototyping</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                <div className="card d-flex flex-column align-items-center justify-content-center">
                    <img src={icon4} alt="icon"/>
                    <h4>Illustration</h4>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;