import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section id='pricing' className="pricing d-flex flex-column align-items-center">
            <div className="heading">
                <h2>Choose Your Dedicated Team</h2>
            </div>
            <div className="pricing-cards container-fluid">
                <div className="row d-flex justify-content-around align-items-center">
                <div className="cards col-lg-3">
                    <h1>$199</h1>
                    <p>For Basic</p>
                    <ul>
                        <li>Homepage</li>
                        <li>No Inner Page</li>
                        <li>Asset file</li>
                        <li>Source File</li>
                        <li>Free Stock Photos</li>
                        <li>10 Days Free Support</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>
                <div className="cards col-lg-3 special">
                    <h1>$399</h1>
                    <p>For Preferred</p>
                    <ul>
                        <li>Homepage</li>
                        <li>No Inner Page</li>
                        <li>Asset file</li>
                        <li>Source File</li>
                        <li>Free Stock Photos</li>
                        <li>10 Days Free Support</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button className="btn order-now">Order Now</button>
                </div>
                <div className="cards col-lg-3">
                    <h1>$599</h1>
                    <p>For Elite</p>
                    <ul>
                        <li>Homepage</li>
                        <li>No Inner Page</li>
                        <li>Asset file</li>
                        <li>Source File</li>
                        <li>Free Stock Photos</li>
                        <li>10 Days Free Support</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;