import React from 'react';
import Banner from './Banner';
import Catagories from './Catagories';
import Footer from './Footer';
import Legacy from './Legacy';
import Navbar from './Navbar';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Trust from './Trust';

const Layouts = () => {
    return (
        <div className=' text-[#2b2e4a] bg-[#fafafa]'>
            <Navbar />
            <Banner />
            <Catagories />
            <Services />
            <Legacy />
            <Testimonials />
            <Trust />
            <Footer />
        </div>
    );
};

export default Layouts;