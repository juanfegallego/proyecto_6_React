

import React from 'react';
import imageHome from "../../components/img/home.jpg";
import CarouselSlider from '../../components/Slider/Slider';

import "./Home.css"



const Home = () => {
    return (
        <div>
            <div >
                
                <img className="imageHome" alt="Home" src={imageHome} />
                <CarouselSlider/>
            </div>

        </div>
    )
}

export default Home;