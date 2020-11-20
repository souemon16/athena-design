import React from 'react';
import './Achievements.css';
import emoji1 from '../../../Images/Illustration/happy@2x.png';
import emoji2 from '../../../Images/Illustration/marketing@2x.png';
import emoji3 from '../../../Images/Illustration/surface1@2x.png';
import emoji4 from '../../../Images/Illustration/transportation@2x.png';

const Achievements = () => {
    return (
        <section className="achievements container-fluid">
            <div className="row d-flex align-items-center justify-content-around">
                <div className="col-md-4">
                    <h2>Our Achievements</h2>
                    <p>It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letter. </p>
                </div>
                <div className="col-md-7 d-lg-flex">
                    <div className="row d-flex justify-content-between">
                        <div className="card special left">
                            <img src={emoji1} alt="emoji icon" className="emoji" />
                            <div className="card-detail">
                                <h3>700+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="card right">
                            <img src={emoji2} alt="emoji icon" className="emoji" />
                            <div className="card-detail">
                                <h3>140+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>

                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="card left">
                            <img src={emoji3} alt="emoji icon" className="emoji" />
                            <div className="card-detail">
                                <h3>25+</h3>
                                <p>Crazy Minds</p>
                            </div>
                        </div>
                        <div className="card right">
                            <img src={emoji4} alt="emoji icon" className="emoji" />
                            <div className="card-detail">
                                <h3>75+</h3>
                                <p>Running Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;