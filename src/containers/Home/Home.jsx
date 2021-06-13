

import React from 'react';
import imageHome from "../../components/img/home.jpg";

import "./Home.css"



const Home = () => {
    return (
        <div>
            <div >
                <img className="imageHome" src={imageHome} />
            </div>

        </div>
    )
}

export default Home;