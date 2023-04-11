import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img/clip-1717.png";
import "../assets/signupGerente.css"
import { useForm } from "../customHooks/useForm";
import { axiosCreate } from "../helpers/axios";
import { getRolls } from "../helpers/requests/rolls";

const About = ()=>{
    const navigate = useNavigate();
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
       navigate(-1);
    };

    return(
        <>
            {
            <section className="divisor">
                <div className="izquierda">
                    <h1 id="h1A">Bienvenido</h1>
                    <h2 id="h2A">Está app fue desarrollada por:</h2>
                    <img className="Img-R" src={img1} />
                </div>
                <div className="derecha">
                    <h1 id="h1R">Integrantes</h1>
                    <br/>
                    <div className="formContainer">
                        <div className="form">
                                <p>Kevin Daniel Flores Nataren</p>
                                <p>Ángel Michael Gómez Herrera</p>
                                <p>Janeth Alejandra Morales Mendoza</p>
                                <p>KArla MArivruz Ruíz Díazn</p>
                                <p>Jesús Eduardo Gómez Guillen</p>
                                <p>Luis Paulo</p>
                                <p>Luis Eduardo</p>
                                <p>Lauro Essaú</p>
                        </div>
                        <h1>Bajo la tutela de:</h1>
                        <p>Rocío Crystal Herández Camacho</p>
                        <div className="button">
                            <button onClick={handleClick} type="button" className="buttonI btn btn-primary">Regresar</button>
                        </div>
                    </div> 
                </div>
            </section>
            }
        </>
    )
}
export default About;