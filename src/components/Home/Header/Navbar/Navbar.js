import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg custom_navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand custom_brand" to="/">AJ</Link>
                    <button className="navbar-toggler ml-auto toggle_icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active custom_menu" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom_menu" href="#about">About</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link custom_menu" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom_menu" href="#blogs">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link custom_menu" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;