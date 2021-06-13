import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
// import axios from 'axios';

import "./Login.css";


const Login = () => {

    let history = useHistory();
    
    //Hooks
    const [credentials, setCredentials] = useState({email:'',password:''});
    const [msgError, setMensajeError] = useState('');

    //Handlers
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const logeame = async () => {


        //Primero, testeamos los datos

        // if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
            
        //     setMensajeError('Introduce un e-mail válido');
        //     return;
        // };

        // if(credentials.password.length < 4){
        //     setMensajeError('Introduce un password de por lo menos 4 caracteres');
        //     return;
        // }

        // //A continuación, generamos el body de datos
        // let body = {
        //     email : credentials.email,
        //     password : credentials.password
        // }
        //Axios..envio

        // let res = await axios.post('endpointDelBackend', body);

        //res viene de vuelta con el token y los datos..por lo tanto los tendremos
        //disponibles en res.data

        
        // let token = "";
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkZGYyYmQzNjAzMjQ4ZmMyZTJmNTUiLCJjcmVhdGVBdCI6IjIwMjEtMDYtMDlUMTE6Mjg6MDEuNDEyWiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyMzIzODA4MX0.Fs73g3IGJ5BCqkOnPKHDM5LRQL1-DB4eMt7bviMSHkk"
        let user = {
            nombre : "Jose Luis",
            email : "joseluis@test.com",
            password : "12345678ASDFGH",
            id : "60bddf9e03b4160428e52d8e"
        }

        if(token !== ""){
            //A falta de RDX ..buenas son tortas

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        

            //Redireccion

            setTimeout(()=> {
            
                history.push("/profile");

            }, 750);
        }else {
            setMensajeError("Las credenciales no eran correctas");
        }

        
    }

    return (
        
        <div className="vistaLogin">
            {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
            <div className="loginCard">
                <input  className="inputLogin" type='email' name='email' title='email' placeholder="email" onChange={updateCredentials} lenght='30'/>
                <input  className="inputLogin" type='password'  name='password' title='password' placeholder="password" onChange={updateCredentials} lenght='30'/>
                <div className="sendButton" type="submit" onClick={()=>logeame()}>Login</div>
                <div>{msgError}</div>
            </div>
            
        </div>
    )
}

export default Login;