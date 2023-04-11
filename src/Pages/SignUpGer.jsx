import React, { useEffect, useState } from "react";;
import "../assets/signupGerente.css";
import img1 from "/src/assets/img/clip-104.png";
import { useForm } from '../customHooks/useForm';
import { useDispatch } from 'react-redux';
import { registerManager } from "../store/thunks/userThunks";
import { Link, Navigate } from "react-router-dom";

const initialForm = {
    name: '',
    last_name: '',
    username: '',
    password: ''
}

const SignUpGer = ()=> {
    const dispatch = useDispatch();
    const [values, handleInputChange, reset] = useForm(initialForm);
    const handleClick = () => {
        const { name, last_name, username, password } = values;
        const body = {
            name, last_name, username, password,
            rolls: ["MANAGER"]
        }
        dispatch(registerManager(body));
    };
    return  (
        <div>
            <section className="divisor">
            <div className="izquierda">
                <h1 id="h1A">Hola Gerente!</h1>
                <h2 id="h2A">Aquí puedes crear tu usuario</h2>
                <img className="Img-A" src={img1} />
            </div>
            <div className="derecha">
                <h1 id="h1R">Registrate</h1>
                <br/>
                <section id="sect">
                    <div className="mb-3 row">
                        <div className="col-sm-10 inp ">
                            <input onChange={handleInputChange} type="text" name="name"  className="form-control form-control-lg nombres"  placeholder="Nombre"/>
                            <input onChange={handleInputChange} type="text" name="last_name"  className="form-control form-control-lg apellidos"  placeholder="Apellidos"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input onChange={handleInputChange} type="text" name="username"  className="form-control form-control-lg inputsL"  placeholder="Usuario"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10">
                            <input onChange={handleInputChange} type="password" name="password" className="form-control form-control-lg inputsL" placeholder="Password"  id="inputPassword "/>
                        </div>
                    </div>
                    <div className="mb-3 row" style={{display: 'flex'}}>
                            <div className="col-sm-10">
                                <label>Ya tienes cuenta?</label>
                                <Link to={'/auth/login'} style={{marginLeft: 10}} >Inicia Sesión</Link>
                            </div>
                        </div>
                    <button onClick={handleClick} type="button" className="btn btn-cl">Registrar</button>
                </section>

            </div>
            </section>
        </div>
    )
}
export default SignUpGer;
