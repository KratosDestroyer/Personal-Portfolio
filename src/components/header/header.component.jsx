import React from 'react';

import './header.styles.scss';

const Header = () => (
    <div className="navbar-container">
        <div className="navbar">
            <div className="navbar-items">Home</div>
            <div className="navbar-items">About</div>
            <div className="navbar-items">Skills</div>
            <div className="navbar-items">Projects</div>
            <div className="navbar-items">Contact</div>
        </div>
    </div>
)

export default Header;