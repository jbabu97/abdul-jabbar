import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProfilePhoto2 from '../../../photos/profile_pic2.jpg';

import './About.css';

const About = () => {
    return (
        <section id='about' className='container'>
            <h1 className='tittle'>About</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className='about'>
                        <div data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                            <img src={ProfilePhoto2} alt='' />
                        </div>
                        <p data-aos="slide-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>I am a junior web developer with very good knowledge of front-end skills. Coding is my passion. I love to do coding and very excited to learn new technologies. I also like to work in a team. I will be happy to work with you.</p>
                        <button className='custom_btn' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'><a href="#contact">Hire Me</a></button>
                    </div>    
                
                </div>  
                <div className="col-md-6">
                    <div className='skills' data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                        <h3>Skills</h3>
                        <div>
                            <h5>html</h5>
                            <ProgressBar now={80} label={`${80}%`} />
                        </div>
                        <div>
                            <h5>css</h5>
                            <ProgressBar now={85} label={`${85}%`} />
                        </div>
                        <div>
                            <h5>javascript</h5>
                            <ProgressBar now={55} label={`${55}%`} />
                        </div>
                        <div>
                            <h5>bootstrap</h5>
                            <ProgressBar now={80} label={`${80}%`} />
                        </div>
                        <div>
                            <h5>react</h5>
                            <ProgressBar now={65} label={`${65}%`} />
                        </div>
                        <div>
                            <h5>node</h5>
                            <ProgressBar now={50} label={`${50}%`} />
                        </div>
                        <div>
                            <h5>mongoDB</h5>
                            <ProgressBar now={60} label={`${60}%`} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;