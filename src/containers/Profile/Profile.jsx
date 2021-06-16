import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import user from "../../components/img/user.png"

import "./Profile.css";

const Profile = () => {

    let history = useHistory();

    const [userData, setUserData] = useState({
        token: localStorage.getItem("token"),
        user: JSON.parse(localStorage.getItem("user"))
    });

    useEffect(() => {
        console.log(userData.token);
    }, []);

    const deslogea = () => {
        localStorage.clear();
        setUserData("");

    }

    if (userData.token) {
        return (
            <div className="bodyProfile">
                <div className="cardProfile">
                    <div className="profile"><img className="imgProfile" src={user} alt="" /></div>
                    <div className="textProfile">
                    <div>{userData.user.name} </div>
                    <div>{userData.user.surname}</div>
                    <div>{userData.user.email}</div>
                    <div>{userData.user.phoneNumber}</div>
                    <div>{userData.user.country}</div>
                    <div>{userData.user.city}</div>
                    <div>{userData.user.birthday}</div>
                    </div>
                    
                </div>
                <div className="botonLogOut" onClick={() => deslogea()}>LOG OUT</div>
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





export default Profile;