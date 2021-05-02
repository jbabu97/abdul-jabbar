import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
            <nav className='custom_navbar'>
                <div className='max_width'>
                    <div className='resume'>
                        <a href="#" download='https://drive.google.com/file/d/1HbJyudz58b5jXFnXqioeHPNwA8FnfbZo/view'><FontAwesomeIcon className='download_icon' icon={faArrowCircleDown} /> Resume</a>
                    </div>
                    <ul className='menu'>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;