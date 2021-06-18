import React from "react";
import { connect } from "react-redux";
import "./Reservas.css";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Spinner from "../Spinner/Spinner";

const Reservas = (props) => {
  console.log(props.userBooking);

  if (props?.userBooking === "vacio") {
    return (
      <div>
        <p>No tienes ninguna reserva</p>
      </div>
    );
  } else if (!props.userBooking[0]?.idUser) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="Bokings">MY BOOKINGS</h2>
        <div className="allBookings">
          <div className="bookingsContainer">
            {props?.userBooking.map((reserva) => {
              console.log(reserva._id);
              console.log(reserva);
              return (
                <div key={reserva._id}>
                  <div className="bookingCard">
                    <p> Restaurante: {reserva.restaurant.name} </p>
                    <p> Usuario: {reserva.idUser.name} </p>
                    <p> Comensales : {reserva?.partySize} </p>
                    <p> Fecha :{moment(reserva.fecha).format("LL")}</p>
                    <p> Hora : {reserva.hora}PM</p>
                    <p> Alergias : {reserva.alergias} </p>
                    <p> COMENTARIOS : {reserva.comentarios} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default connect((state) => ({
  userBooking: state.userBooking,
  credentials: state.credentials,
}))(Reservas);

// <div>
// <Spinner />
// </div>
