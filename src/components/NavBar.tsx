import React from 'react';
import '../css/NavBar.scss'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="header">
                <div className="header_logo">
                    <h1>SEA<span>RCH</span></h1>  
                </div>   
            </div>
            <div className="menu">
                <ul className='menu_list'>
                    <li>Mercury</li>
                    <li>Wenus</li>
                    <li>Ziemia</li>
                    <li>menu item</li>
                    <li>menu item</li>
                    <li>Contact</li>
                </ul>    
            </div>  
        </div>
    );
};

export default NavBar;