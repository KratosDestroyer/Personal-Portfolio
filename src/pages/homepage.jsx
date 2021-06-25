import React from 'react';
import Header from '../components/header/header.component';
import Hscroller from '../sections/Hscroller/hscroller.component';
import About from '../sections/about/about.component';

const Homepage = () => (
    <div>
        <Header></Header>
        <Hscroller></Hscroller>
        <About></About>
    </div>
)

export default Homepage;