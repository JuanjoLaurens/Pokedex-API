import React, { useState, useEffect } from 'react';
import style from "./style.scss";
import regeneratorRuntime from "regenerator-runtime";
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
// import { useEffect } from 'react';



const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate();

    async function signUp() {
        let item =  (name, email, password)
        console.log = (item)

        let result = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info",JSon.stringify(result))
        navigate.push("/")

    }
    return (

            
        <form>
        <div className="container">
            <div className='form-register'>
                <div><img src="https://fontmeme.com/permalink/221006/46a823408bee1968761e171c52459e7d.png" />
                </div></div>


            <div className='col-sm-4 offset-sm-3'>

                <input type="text" placeholder="¿Cuál es tu nombre?" onChange={(e) => setName(e.target.value)} className="form-control input-t" required />
                <input type="email" placeholder="Tu email" onChange={(e) => setEmail(e.target.value)} className="form-control input-t" required />
                <input type="password" placeholder="Tu contraseña" onChange={(e) => setPassword(e.target.value)} className="form-control input-t" required />
                <button onClick={signUp} className='btn btn-send'>Registrarte</button>

            </div>



        </div>
        </form>

    );


}

export default Register