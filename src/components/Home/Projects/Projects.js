import React from 'react';
import './Projects.css';
import MamaPhoto from '../../../photos/mama_sewing.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className='container'>
            <h1 className='text-center'>My Projects</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center project">
                        <div>
                            <img className='img-fluid' src={MamaPhoto} alt=""/>
                            <h3>mama sewing</h3>
                            <p>Tailoring Service Site</p>
                        </div>
                        <div className="see_more">
                            <Link style={{textDecoration: 'none'}} className='ml-auto'><button className='animate__animated animate__fadeInDown'>See More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                        <div className="text-center project">
                            <div>
                                <img className='img-fluid' src={MamaPhoto} alt=""/>
                                <h3>mama sewing</h3>
                                <p>Tailoring Service Site</p>
                            </div>
                            <div className="see_more">
                                <Link style={{textDecoration: 'none'}} className='ml-auto'><button className='animate__animated animate__fadeInDown'>See More</button></Link>
                            </div>
                        </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center project">
                        <div>
                            <img className='img-fluid' src={MamaPhoto} alt=""/>
                            <h3>mama sewing</h3>
                            <p>Tailoring Service Site</p>
                        </div>
                        <div className="see_more">
                            <Link style={{textDecoration: 'none'}} className='ml-auto'><button className='animate__animated animate__fadeInDown'>See More</button></Link>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default Projects;