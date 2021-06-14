import React from 'react';
import cena from '../img/cena.jpg';
import home from '../img/home.jpg'


import 'antd/dist/antd.css'
import {Card,Row,Col,Carousel} from 'antd';

class CarouselSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                 <Card className="card-wrap" style={{backgroundColor: "#ededf4"}} >
                    <Carousel autoplay effect="fade">
                        <div>
                            <img className= "PhotoSlider" style={{width: "100vw", height: "100vh", backgroundColor: "#ededf4"}} src={cena} alt =""/>
                        </div>
                        <div>
                            <img className= "PhotoSlider" style={{width: "100vw", height: "100vh", backgroundColor: "#ededf4"}} src={home} alt=""/>
                        </div>
                        
                    </Carousel>
                </Card>
            </div>
        );
    }
}
export default CarouselSlider;