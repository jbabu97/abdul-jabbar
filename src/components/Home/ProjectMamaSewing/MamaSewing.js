import React from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import './MamaSewing.css';
import MamaSewing1 from '../../../photos/mama_1.png';
import MamaSewing2 from '../../../photos/mama_2.png';
import MamaSewing3 from '../../../photos/mama_3.png';

const MamaSewing = ({show, modalClose}) => {
    return (
        <div>
            <Modal className='modal' show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                <Modal.Title><h2>Mama Sewing</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel fade>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={MamaSewing1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={MamaSewing2}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={MamaSewing3}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='mt-3'>
                        <p>This is a full stack Tailoring service website</p>
                        <p>User can login with google account by firebase authentication system</p>
                        <p>There are different dashboard for users and admin</p>
                        <p>User can book any service using payment method by stripe and write feedback</p>
                        <p>Use MongoDB as a Database</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modal_footer'>
                    <a className='custom_btn' href="https://github.com/jbabu97/mama-sewing" target='_blank'>Client</a>
                    <a className='custom_btn' href="https://github.com/jbabu97/mama-sewing-server" target='_blank'>Client</a>
                    <a className='custom_btn' href="https://mama-sewing.web.app/" target='_blank'>Live Site</a>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MamaSewing;