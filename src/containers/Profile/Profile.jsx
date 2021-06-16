import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import user from "../../components/img/user.png"
import {connect} from 'react-redux';
import moment from 'moment';
import "./Profile.css";
import { ADD_CHARACTERS } from '../../redux/type';
import axios from 'axios';
import Reservas from '../../components/Reservas/reservas'


const Profile = (props) => {

    let history = useHistory();
    

    // const [userData, setUserData] = useState({
    //     token: localStorage.getItem("token"),
    //     user: JSON.parse(localStorage.getItem("user"))
    // });

    // useEffect(() => {
    //     console.log(userData.token);
    // }, []);

    // const deslogea = () => {
    //     localStorage.clear();
    //     setUserData("");

    // }
    const getFromApi = async () => {

        let res = await axios.get("https://rickandmortyapi.com/api/character");
        
        //Guardaremos en RDX
        props.dispatch({type:ADD_CHARACTERS,payload:res.data.results});

    }

    if (props.credentials?.user.token !== '') {
        console.log(props.credentials);
        return (
            <div className="bodyProfile">
                <div className="cardProfile">
                    <div className="profile"><img className="imgProfile" src={user} alt="" /></div>
                    <div className="textProfile">
                    <div>{props.credentials.user.name}</div>
                    <div>{props.credentials.user.surname}</div>
                    <div>{props.credentials.user.email}</div>
                    <div>{props.credentials.user.phoneNumber}</div>
                    <div>{props.credentials.user.country}</div>
                    <div>{props.credentials.user.city}</div>
                    <div>{moment(props.credentials.user.birthday).format('LL')}</div>

                    
                     <div className="botonPersonajes" onClick={()=>getFromApi()}>BRING!</div>
                    </div>
                    
                </div>
                
                <div className="reservas">
                    <Reservas/>
                </div>
            </div>
              
        


        )
    } else {

        setTimeout(() => {
            history.push("/login");
        }, 3000)

        return (
            <div>NO ESTAS LOGEADO, NO PUEDES ENTRAR AQUI</div>
        )
    }
}





export default connect((state)=>({credentials:state.credentials}))(Profile);