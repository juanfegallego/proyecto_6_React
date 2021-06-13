
import React from 'react';
import "./Header.css";

import Boton from '../../components/Boton/Boton';
import logo from "../img/logo.png";

const Header = () => {
    return (
        <div className="header">
            <div >
                <img className="logo" src={logo} />
            </div>
            <div className="text" >
                <Boton lugar="/" destino="Home" />
                <Boton lugar="/register" destino="Registro" />
                <Boton lugar="/login" destino="Login" />
                <Boton lugar="/profile" destino="Profile" />
            </div>
        </div>
    )
}

export default Header;