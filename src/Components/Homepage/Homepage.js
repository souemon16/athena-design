import React from 'react';
import Achievements from './Achievements/Achievements';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import RunningProjects from './RunningProjects/RunningProjects';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Homepage = () => {
    return (
        <>
        <Header />
        <WhatWeDo />
        <RunningProjects />
        <Achievements />
        </>
    );
};

export default Homepage;