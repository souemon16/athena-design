import React from 'react';
import './RunningProjects.css';
import sectionImg from '../../../Images/Illustration/20 [Converted]@2x.png';

const RunningProjects = () => {
    return (
        <section className="header-two container">
            <div className="row d-flex align-items-center justify-content-between">
            <div className="section-img col-md-6">
                <img src={sectionImg} alt="section image" className="img-fluid" />
            </div>
            <div className="section-body col-md-5">
                <h1>Stay Running & Project</h1>
                <p>It is a long established fact that a reader will be
                 distracted by the readable content of a page when looking at its layout.
                 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                <button className="btn contact-us">Contact us</button>
            </div>
            </div>
        </section>
    );
};

export default RunningProjects;