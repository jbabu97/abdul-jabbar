import React from 'react';
import './HeaderMain.css';
import ProfilePhoto from '../../../../photos/profile_img_1.png';
import ProfilePhoto2 from '../../../../photos/my_pic_1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
// import Typing from 'react-typing-animation';

const HeaderMain = () => {
    return (
        <section className='container'>
            <div className='row header_main'>
                <div className='col-md-6 welcome'>
                    <div>
                        <h3>I'm Abdul Jabbar</h3>
                        <h1>Junior Web Developer</h1>
                        <button className='custom_btn'><a href="https://drive.google.com/uc?export=download&id=1bEni8nj3ku67YTUkuF5qUN_aY-q-TKs5"><FontAwesomeIcon className='download_icon' icon={faArrowCircleDown} /> Resume (PDF)</a>
                    </button>
                    </div>
                </div>
                <div className='col-md-6 profile_photo'>
                    <div className='profile_photo'>
                        <img src={ProfilePhoto} alt="Abdul Jabbar"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;