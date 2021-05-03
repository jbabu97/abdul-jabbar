import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_icok53b', 'template_nzrcuz8', e.target, 'user_yBw40HqTSND2bVZif36Bl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    
    return (
        <section id='contact' className='container contact'>
            <h2 className='tittle'>Contact Me</h2>
            <div className="row">
                <div className="col-md-6 contact_info">
                    <div data-aos="slide-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                        <p>email: jabbar.babu81@gmail.com</p>
                        <p>phone: 8801718255175</p>
                        <p>locaton: Gazipur, Dhaka, Bangladesh</p>
                    </div>
                    <div className="social" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                        <a href="https://www.facebook.com/muhammadabduljabbar.babu" target='_blank'><FontAwesomeIcon className='social_icon' icon={faFacebook} /></a>
                        <a href="https://www.linkedin.com/in/jabbarbabu/" target='_blank'><FontAwesomeIcon className='social_icon' icon={faLinkedin} /></a>
                        <a href="https://twitter.com/jbabu97" target='_blank'><FontAwesomeIcon className='social_icon' icon={faTwitterSquare} /></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <p>Feel free to leave message here</p>
                    <form onSubmit={sendEmail} data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                        <div className="mb-3">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" name='email' className="form-control" placeholder='Email' />
                        </div>
                        <div className="mb-3">
                            <input type="text" name='subject' className="form-control" placeholder='Subject' />
                        </div>
                        <div className="mb-3">
                            <textarea name='message' className='form-control' style={{resize: 'none'}} id="" cols="30" rows="5"></textarea>
                        </div>
                        <button type="submit" className="custom_btn">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;