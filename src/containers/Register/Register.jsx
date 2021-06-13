import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import cena from "../../components/img/cena.jpg";
const Register = () => {
    let history = useHistory();
    //Hooks
    const [datosUser, setDatosUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phoneNumber: "",
        country: "",
        city: "",
        birthday: "",
    });
    const [msgError, setMensajeError] = useState("");
    //Handlers (manejadores)
    const updateFormulario = (e) => {
        setDatosUser({ ...datosUser, [e.target.name]: e.target.value });
    };
    //Funciones
    const ejecutaRegistro = async () => {
        let user = {
            name: datosUser.name,
            surname: datosUser.surname,
            email: datosUser.email,
            password: datosUser.password,
            phoneNumber: datosUser.phoneNumber,
            country: datosUser.country,
            city: datosUser.city,
            birthday: datosUser.birthday,
        };
        axios
            .post("http://localhost:3005/user", user)
            .then((res) => { })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="formularios">
            <div className="formulario1">
                <input
                    className="inputBase"
                    type="text"
                    name="surname"
                    onChange={updateFormulario}
                    placeholder="Surname"
                ></input>
                <input
                    className="inputBase"
                    type="email"
                    name="email"
                    onChange={updateFormulario}
                    placeholder="Email"
                ></input>
                <input
                    className="inputBase"
                    type="password"
                    name="password"
                    onChange={updateFormulario}
                    placeholder="Password"
                ></input>
                <input
                    className="inputBase"
                    type="tel"
                    name="phoneNumber"
                    onChange={updateFormulario}
                    placeholder="Phone"
                ></input>
                <input
                    className="inputBase"
                    type="text"
                    name="country"
                    onChange={updateFormulario}
                    placeholder="Country"
                ></input>
                <input
                    className="inputBase"
                    type="text"
                    name="city"
                    onChange={updateFormulario}
                    placeholder="City"
                ></input>
                <input
                    className="inputBase"
                    type="date"
                    name="birthday"
                    onChange={updateFormulario}
                    placeholder="Name"
                ></input>
                <button className="botonCuco" type="submit" onClick={() => ejecutaRegistro()}>
                    REGISTRAR
                </button>
                <div>{msgError}</div>
            </div>
            <div className="textRight">
                <p>Crea tu cuenta y reserva una mesa en cuestión de segundos</p>
                <img className="imageCena" src={cena} />
            </div>

        </div>

    );
};
export default Register;