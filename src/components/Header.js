import React from 'react';
import '../css/header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <h1>SEA<span>RCH</span></h1>  
            </div>
            <p className="header_title">
            To get started, scroll
            </p>     
        </div>  
    );
};

export default Header;