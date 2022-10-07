import style from "./style.scss";
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {



    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate.push("/")
        }
    }, [])

    async function login(){
        console.warn('email,password')
        let item=(email, password);
        let result = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)

    });

    result = await result.json();
    localStorage.setItem('user-profile',JSON.stringify(result))
    navigate.push('/')
    }
    return (

        <form>
        <div className="container">
            <div className='form-register'>
                <div><img src="https://fontmeme.com/permalink/221006/46a823408bee1968761e171c52459e7d.png" />
                </div></div>


            <div className='col-sm-4 offset-sm-3'>
                <input type="email" placeholder="Tu email" onChange={(e) => setEmail(e.target.value)} className="form-control input-t" required />
                <input type="password" placeholder="Tu contraseña" onChange={(e) => setPassword(e.target.value)} className="form-control input-t" required />
                <button onClick={login} className='btn btn-login'>Iniciar sesion</button>

            </div>



        </div>
        </form>
    )


}

export default Login