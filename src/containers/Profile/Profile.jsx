import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import "./Profile.css";

const Profile = () => {

    let history = useHistory();

    const [userData, setUserData] = useState({
        token: localStorage.getItem("token"), 
        user: JSON.parse(localStorage.getItem("user"))});

    useEffect(()=> {
        console.log(userData.token);
    },[]);

    const deslogea = () => {
        localStorage.clear();
        setUserData("");

    }

    if(userData.token){
        return (
            <div>
                {userData.user.email}
                <div className="botonLogOut" onClick={()=> deslogea()}>LOG OUT!!!</div>
            </div>
        )
    }else{

        setTimeout(()=> {
            history.push("/login");
        },3000)

        return (
            <div>NO ESTAS LOGEADO, NO PUEDES ENTRAR AQUI</div>
        )
    }}

    



export default Profile;