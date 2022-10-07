import React from "react"
import style from "./style.scss";
import Header from "../Header";
import { useState, useEffect } from "react";
import {withRouter} from 'react-router-dom';


function UpdateUser(props) {




    const [data, setData] = useState([])
    console.warn("props.match.params.id")
    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/user/)' + props.match.params.id);
        result = await result.json();
        setData(result)
    })




    return (
        <form>
            <div className="container">
                <div className='form-register'>
                    <div><img src="https://fontmeme.com/permalink/221007/3ec3baf9e988956ee80453ffcb04a991.png" />
                    </div></div>


                <div className='col-sm-4 offset-sm-3'>
                    <input className="name_data form-control" type="text" defaultValue={data.name} />
                    <input className="name_data form-control" type="text" defaultValue={data.email} />
                    <input className="name_data form-control" type="text" defaultValue={data.address} />
                    <input className="name_data form-control" type="text" defaultValue={data.birthdate} />
                    <input className="name_data form-control" type="text" defaultValue={data.city} />




                    {/* <input type="email" placeholder="Tu email" onChange={(e) => setEmail(e.target.value)} className="form-control input-t" required />
                <input type="password" placeholder="Tu contraseña" onChange={(e) => setPassword(e.target.value)} className="form-control input-t" required /> */}
                    <button  className='btn btn-send'>Actualizar</button>

                </div>



            </div>
        </form>
    )

}


export default  UpdateUser
