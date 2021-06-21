import React, { useState, useEffect } from "react";
import { REST } from "../../redux/type";
import "./Restaurants.css";
import axios from "axios";
import { connect } from "react-redux";
import reservas from "../Reservas/reservas";
import { useHistory } from "react-router";


const Restaurants = (props) => {
  let history = useHistory();

  const [restaurants, setRestaurants] = useState([]);
  
   useEffect(() => {

      getRest()
   
   },[] )

    const reservas = ()=>{

       props.dispatch({ type: REST, payload: restaurants });

       setTimeout(() => {
         history.push('/bookings')
         
       }, 500);
    }




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
                           <div className="reserva"  onClick={()=> reservas()}> Reserva</div>
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

