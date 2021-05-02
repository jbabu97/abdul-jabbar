import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProfilePhoto2 from '../../../photos/profile_pic2.jpg';

import './About.css';

const About = () => {
    return (
        <section className='container'>
            <h1 className='text-center'>About</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className='about'>
                        <img src={ProfilePhoto2} alt='' />
                        <p>I am a junior web developer with very good knowledge of front-end skills. Coding is my passion. I love to do coding and very excited to learn new technologies. I also like to work in a team. I will be happy to work with you.</p>
                        <button className='custom_btn'><a href="#contact">Hire Me</a></button>
                    </div>    
                
                </div>  
                <div className="col-md-6">
                    <div className='skills'>
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