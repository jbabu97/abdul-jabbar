import React from 'react';
import emailjs from 'emailjs-com';

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
        <section className='container'>
            <h2>Contact Me</h2>
            <div className="row">
                <div className="col-md-6">
                <form onSubmit={sendEmail}>
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
                    <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div>
                        <p>email: jabbar.babu81@gmail.com</p>
                        <p>phone: 8801718255175</p>
                        <p>locaton: Gazipur, Dhaka, Bangladesh</p>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/muhammadabduljabbar.babu" target='_blank'>Facebook</a>
                        <a href="https://www.linkedin.com/in/jabbarbabu/" target='_blank'>Linkedin</a>
                        <a href="https://twitter.com/jbabu97" target='_blank'>Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;