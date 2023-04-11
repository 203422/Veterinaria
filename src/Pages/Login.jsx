import React, {  useEffect, useState } from "react";
import "../assets/login.css"
import imgH from "../assets/img/clip-hardworking-man.png"
import { Link, Navigate } from "react-router-dom";
import { useForm } from "../customHooks/useForm";
import { useDispatch } from "react-redux";
import { login } from "../store/thunks/userThunks";

const initialForm = {
    username: '',
    password: ''
}

const Login = () => {
    const [values, handleInputChange, reset] = useForm(initialForm);
    const [count, setCount] = useState(null);
    const dispatch = useDispatch();
    const handleClick = () => {
        const { username, password } = values;
        const body = {
            username, password
        };
        console.log(body);
        dispatch(login(body));
    }
    return(
        <div>
            <section className="med">
                <div className="leftt">
                    <h1 className="leftH1">Hola!</h1>
                    <h2 className="leftH2">Inicia sesión con tu cuenta</h2>
                    <section id="sectioncss">
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input type="text" onChange={handleInputChange} name="username"  className="form-control form-control-lg inputsLogin"  placeholder="Usuario"/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <input onChange={handleInputChange} name="password" type="password" className="form-control form-control-lg inputsLogin" placeholder="Password"  id="inputPassword "/>
                            </div>
                        </div>
                        <div className="mb-3 row" style={{display: 'flex'}}>
                            <div className="col-sm-10">
                                <label>¿Primera Vez?</label>
                                <Link to={'/auth/signUp/Ger'} style={{marginLeft: 10}} >Regstrate como gerente</Link>
                            </div>
                        </div>
                        <button onClick={handleClick} type="button" className="btn btn-login">Entrar</button>
                    </section>
                </div>
                <div className="rigthh">
                    <h1 className="mess">Bienvenido</h1>
                    <h2 className="frase">“La fuerza del equipo viene de cada miembro. La fuerza de cada miembro es el equipo.”</h2>
                    <h2 className="autor">-Phil Jackson.</h2>
                    <img src={imgH} className="img-H"/>
                </div>
            </section>
        </div>
    )
}
export default Login;