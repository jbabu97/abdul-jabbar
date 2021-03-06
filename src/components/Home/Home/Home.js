import React from 'react';
import About from '../About/About';
// import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import Navbar from '../Header/Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <About></About>
            <Projects></Projects>
            {/* <Blogs></Blogs> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;