import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer'>
                <p>Abdul Jabbar &copy; {(new Date()).getFullYear()} All right reserved</p>
        </section>
    );
};

export default Footer;