import React from 'react';
import './about.styles.scss';
import Garvit from '../../assets/image/Garvit.jpg'

const About = () => (
    <div className='about-section'>
        <header>
            <div className='about-image'>
                <img src={Garvit} alt="" />
            </div>
            <div className='about-description'>
                <p className='greeting'>Hi there i'm</p>
                <h1><span>Garvit</span> Vaishnav</h1>
                <p className='small-boi'>A Front-End Web Developer passionate about creating interactive applications and experiences on the web.</p>
                <div className='social-resume'>
                    <a className='resume-link' href="">Resume</a>
                    <ul className="social-list">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
);

export default About;