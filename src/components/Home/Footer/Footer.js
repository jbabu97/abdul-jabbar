import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer'>
                <p className='m-0'>Abdul Jabbar &copy; {(new Date()).getFullYear()} All right reserved</p>
                
        </section>
    );
};

export default Footer;