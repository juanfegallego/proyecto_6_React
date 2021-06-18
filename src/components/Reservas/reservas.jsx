
import React from 'react';
import { connect } from 'react-redux';
import './Reservas.css'
import {useHistory} from 'react-router-dom';
import moment from 'moment';
import Spinner from '../Spinner/Spinner';

const Reservas = (props) => {

 console.log(props.userBooking)

            if(!props.userBooking[0]?.idUser){

                return(
                 <div >
                     <Spinner />
                </div>
                );
                
            }else {
                return(
                    <div className="allBookings">
                        <h1>MY BOOKINGS</h1>
                        <div className="bookingsContainer">
                            
                                <div className="bookingCard">
                                     {/* <p> RESTAURANTE : {props.userBooking[0]?.usuario} </p> */}
                                    <p> USUARIO: {props.userBooking[0]?.usuario} </p>
                                    <p> COMENSALES : {props.userBooking[0]?.partySize} </p>
                                    <p> FECHA :{moment(props.userBooking[0]?.fecha).format('LLL')}</p>
                                    <p> ALERGIAS : {props.userBooking[0]?.alergias} </p>
                                    <p> COMENTARIOS : {props.userBooking[0]?.comentarios} </p> 
                                     
                                </div>
                        </div>
                    </div>
                )
                }
            }
        
    export default connect((state) => ({
        userBooking: state.userBooking,
        credentials:state.credentials
        }))(Reservas);
