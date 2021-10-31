import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TravelArea from '../TravelArea/TravelArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TravelArea></TravelArea>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;