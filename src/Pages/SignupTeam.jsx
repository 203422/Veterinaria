import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img/clip-1717.png";
import "../assets/signupGerente.css"
import { useForm } from "../customHooks/useForm";
import { axiosCreate } from "../helpers/axios";
import { getRolls } from "../helpers/requests/rolls";

const INITIAL_DATA = {
    name: '',
    last_name: '',
    username: '',
    password: '',
};

const SignupTeam = ()=>{
    const navigate = useNavigate();
    const [rolls, setRolls] = useState(0);
    const [select, setSelect] = useState("")
    const [values, handleInputChange, reset] = useForm(INITIAL_DATA);
    useEffect(() => {
      getRolls()
        .then(r => {
            setRolls(r.data.map(roll => roll.name));
        });
        
    }, [])

    const handleBack = () => {
        navigate(-1);
    }

    const handleSelectChange = (e) => {
        // console.log(e);
        setSelect(e.target.value);
    }

    const handleClick = () => {
        const { name, last_name, rolls, username, password } = values;
        const body = {
            name, last_name, rolls: [select], username, password
        };
        // console.log(body);
        axiosCreate().post('users/register', body)
            .then(response => {
                navigate(-1);
            })
            .catch(response => {
                console.log(response);
            });
    };

    return(
        <>
            {
                rolls !== 0 &&
            <section className="divisor">
                <div className="izquierda">
                    <h1 id="h1A">Bienvenido</h1>
                    <h2 id="h2A">Aquí puedes crear los usuarios con sus respectivos roles</h2>
                    <img className="Img-R" src={img1} />
                </div>
                <div className="derecha">
                    <h1 id="h1R">Registro</h1>
                    <br/>
                    <div className="formContainer">
                        <div className="form">
                            <div className="containerInput containerGDates">
                                <input onChange={handleInputChange} name="name" type="text"  className="inputs form-control form-control-lg"  placeholder="Nombre"/>
                                <input onChange={handleInputChange} name="last_name" type="text"  className="inputs form-control form-control-lg"  placeholder="Apellidos"/>
                            </div>
                            <div className="containerInput username">
                                <input onChange={handleInputChange} name="username" type="text"  className="inputs form-control form-control-lg"  placeholder="Usuario"/>
                            </div>
                            <div className="containerInput password">
                                <input onChange={handleInputChange} name="password" type="password" className="inputs form-control form-control-lg" placeholder="Password"  id="inputPassword "/>
                            </div>
                            <div className="select">
                                <select onChange={handleSelectChange} name="roll" className="inputs selectInput form-select"  aria-label="Default select example">
                                    <option hidden value={""}>Selecciona un rol</option>
                                    {
                                        rolls.map((r, i) => <option key={`${r}${i}`} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="button">
                            <button onClick={handleClick} type="button" className="buttonI btn btn-primary">Registrar</button>
                            <button onClick={handleBack} type="button" className="buttonI btn btn-danger">Cancelar</button>
                        </div>
                    </div> 
                </div>
            </section>
            }
        </>
    )
}
export default SignupTeam;