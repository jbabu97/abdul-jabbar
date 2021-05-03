import React from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import MiniPhoto1 from '../../../photos/miniBazar_1.png';
import MiniPhoto2 from '../../../photos/miniBazar_2.png';
import MiniPhoto3 from '../../../photos/miniBazar_3.png';

const MiniBazar = ({show, modalClose}) => {
    return (
        <div>
            <Modal className='modal' show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                <Modal.Title><h2>MiniBazar</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel fade>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={MiniPhoto1}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={MiniPhoto2}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='slider_photo'>
                                <img
                                className="d-block w-100"
                                src={MiniPhoto3}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='mt-3'>
                        <p>This is a grocery service website</p>
                        <p>It's a MERN stack project</p>
                        <p>There are different dashboard for users and admin</p>
                        <p>User can login with google account by firebase authentication system</p>
                        <p>Integrated Private Route system for controll unwanted access into booking page</p>
                        <p>Use MongoDB as a Database</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='modal_footer'>
                    <a className='custom_btn' href="https://github.com/jbabu97/mniBazar" target='_blank'>Client</a>
                    <a className='custom_btn' href="https://github.com/jbabu97/miniBazar-server" target='_blank'>Server</a>
                    <a className='custom_btn' href="https://minibazar-fa2aa.web.app" target='_blank'>Live Site</a>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MiniBazar;