import React, { useState } from 'react';
import './Projects.css';
import MamaThumb from '../../../photos/mama_sewing.jpg';
import MiniThumb from '../../../photos/mini_thumb.png';
import TravelThumb from '../../../photos/travel_thumb.jpg';
import MamaSewing from '../ProjectMamaSewing/MamaSewing';
import MiniBazar from '../MiniBazar/MiniBazar';
import TravelHanger from '../TravelHanger/TravelHanger';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const Projects = () => {

    const [show, setShow] = useState(false);

  const modalClose = () => setShow(false);
  const modalShow = () => setShow(true);

  const [mini, setMini] = useState(false);

  const miniBazarClose = () => setMini(false);
  const miniBazarShow = () => setMini(true);

  const [travel, setTravel] = useState(false);

  const travelClose = () => setTravel(false);
  const travelShow = () => setTravel(true);


    return (
        <section id='projects' className='container'>
            <h1 className='tittle'>My Projects</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center project" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                        <div>
                            <img className='img-fluid' src={MamaThumb} alt=""/>
                            <h3>mama sewing</h3>
                            <p>Tailoring Service Site</p>
                        </div>
                        <div className="see_more">
                            <button onClick={modalShow} className='animate__animated animate__fadeInDown custom_btn'>See More</button>
                        </div>
                        <MamaSewing show={show} modalClose={modalClose}></MamaSewing>
                    </div>
                </div>
                <div className="col-md-4">
                        <div className="text-center project" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'>
                            <div>
                                <img className='img-fluid' src={MiniThumb} alt=""/>
                                <h3>miniBazar</h3>
                                <p>Grocery Site</p>
                            </div>
                            <div className="see_more">
                                <button onClick={miniBazarShow} className='animate__animated animate__fadeInDown custom_btn'>See More</button>
                            </div>
                            <MiniBazar show={mini} modalClose={miniBazarClose}></MiniBazar>
                        </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center project" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror='true'> 
                        <div>
                            <img className='img-fluid' src={TravelThumb} alt=""/>
                            <h3>travel hanger</h3>
                            <p>Travel Service Site</p>
                        </div>
                        <div className="see_more">
                            <button onClick={travelShow} className='animate__animated animate__fadeInDown custom_btn'>See More</button>
                        </div>
                        <TravelHanger show={travel} modalClose={travelClose}></TravelHanger>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default Projects;