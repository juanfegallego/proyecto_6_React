

import { DatePicker } from 'antd';
import React from 'react';
import imageHome from "../../components/img/home.jpg";
// import CarouselSlider from '../../components/Slider/Slider';
import Restaurants from '../../components/Restaurants/Restaurants';
import Maps from '../../components/Maps/Map';
import "./Home.css"
import { connect } from 'react-redux';



const Home = () => {
    
    
    return (

        <div className="bodyHome">
            <div >

                <img className="imageHome" alt="Home" src={imageHome} />
                {/* <CarouselSlider/> */}
                <div className="textRestaurantes">RESTAURANTES</div>
               
               
                    <Restaurants />
             

            </div>


        </div>
    )
}

export default connect((state) => ({ 
    restaurants:state.restaurants
}))(Home)