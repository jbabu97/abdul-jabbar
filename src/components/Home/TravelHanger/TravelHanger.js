import React from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import Travel1 from '../../../photos/travel_1.png';
import Travel2 from '../../../photos/travel_2.png';
import Travel3 from '../../../photos/travel_3.png';

const TravelHanger = ({show, modalClose}) => {
    return (
        <div>
            <Modal className='modal' show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                <Modal.Title><h2>Travel Hanger</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel fade>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={Travel1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={Travel2}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={Travel3}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='mt-3'>
                        <p>This is a travel booking site</p>
                        <p>It's a single page react application</p>
                        <p>In this project user can login using email password or google account by firebase authentication system.</p>
                        <p>Apply dynamic routing system for show specific items</p>
                        <p>Use private routing for controll user access.</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modal_footer'>
                    <a className='custom_btn' href="https://github.com/jbabu97/dream-travel" target='_blank'>Client</a>
                    <a className='custom_btn' href="https://travel-hanger.web.app" target='_blank'>Live Site</a>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TravelHanger;