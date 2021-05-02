import React from 'react';

const Footer = () => {
    return (
        <section>
            <div className="text-center">
                <p>Abdul Jabbar &copy; {(new Date()).getFullYear()} All right reserved</p>
            </div>
        </section>
    );
};

export default Footer;