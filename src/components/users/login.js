import style from "./style.scss";
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate.push("/")
        }
    }, [])
    return (

        <div>
            <Header />
            <h1>
                OJALA FUNCIOEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            </h1>
        </div>
    )


}

export default Login