import React from "react";
import "./Header.css";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/type";
import {CLEAR_BOOKINGS} from "../../redux/type"
import Boton from "../../components/Boton/Boton";
import logo from "../img/logo.png";

const Header = (props) => {
  let history = useHistory();
  const takeMe = (were) => {
    history.push(were);
  };
  const logOut = () => {
    props.dispatch({ type: LOGOUT })
    props.dispatch({type :CLEAR_BOOKINGS})
  };

  if (props.credentials?.token !== "") {

    return (
      <div className="header">
        <div>
          <img className="logo" alt="logo" src={logo} />
        </div>
        <div className="text">
          <Boton lugar="/" destino="Home" onClick={() => takeMe("/")} />

          <div onClick={() => takeMe("/profile")}>
            {props.credentials.user.name}
          </div>

          <div onClick={() => logOut("/")}>
            <Boton lugar="/" destino="LogOut"></Boton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div>
          <img className="logo" alt="logo" src={logo} />
        </div>
        <div className="text">
          <Boton lugar="/" destino="Home" onClick={() => takeMe("/")}></Boton>

          <Boton
            lugar="/register"
            destino="Registro"
            onClick={() => takeMe("/")}
          ></Boton>

          <Boton
            lugar="/login"
            destino="Login"
            onClick={() => takeMe("/login")}
          />
        </div>
      </div>
    );
  }
};

export default connect((state) => ({ credentials: state.credentials }))(Header);
