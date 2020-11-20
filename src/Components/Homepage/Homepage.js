import React from 'react';
import Achievements from './Achievements/Achievements';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Pricing from './Pricing/Pricing';
import RunningProjects from './RunningProjects/RunningProjects';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Homepage = () => {
    return (
        <>
        <Header />
        <WhatWeDo />
        <RunningProjects />
        <Achievements />
        <Pricing />
        <ContactUs />
        <Footer />
        </>
    );
};

export default Homepage;