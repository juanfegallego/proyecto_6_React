import React, { useState, useEffect } from "react";
import { REST } from "../../redux/type";
import "./Restaurants.css";
import axios from "axios";
import { connect } from "react-redux";
import Boton from "../Boton/Boton"


const Restaurants = (props) => {

  const [restaurants, setRestaurants] = useState([]);
  
   useEffect(() => {

      getRest()
   
   },[] )

  const getRest = async () => {
    try {
      let res = await axios.get(`http://localhost:3005/rest`);
      //GUARDANDO EN REDUX
      // props.dispatch({ type: REST, payload: res.data });
      setRestaurants(res.data)
    } catch (error) {
      console.log(error);
    }
  };


 
    if (restaurants === undefined) {
      return(
        <div>
          cargando
        </div>
      )
    }else{
      return(
        <div>
                         {restaurants?.map((rest)=>{
                         
                     return(
                       <div key={rest._id}>
                         <div className="cardRest">
                         <img className="imgRest" src={rest.imgRest} alt="imgrest"/>
                         <div className="textRest">
                           <h1>{rest.name}</h1>
                           <p> Ciudad: {rest.city}</p>
                           <p> Comida: {rest.typeFood}</p>
                           <p> Direccion: {rest.addres}</p>
                           <p>Telefono: {rest.telephone}</p>

                           <div className="reserva"> Reserva</div>
                         </div>
                         </div>
                         
       
                       </div>
                     )
       
                      })}
      
        </div>
   
      )
     
    }
   
  
}

export default connect((state) => ({ 
    restaurants:state.restaurants,
    
}))(Restaurants);

