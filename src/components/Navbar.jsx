import {useState, useEffect} from 'react';
import '../styles/navbar.css';
import logo from '../assets/logos/logoDan.png';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar__logo'>
                <img src={logo}  alt="logo" />
            </div>
            <div className='navbar__links'>
                <ul>
                    <li>link</li>
                    <li>link</li>
                </ul>
            </div>            
        </nav>
    )
}

export default Navbar;