import React from "react";

import "../assets/Option.css"
import img3 from "../assets/img/clip-961.png"

const Option = ()=>{
    return(
        <div>
            <section className="linea">
                <div className="le">
                    <h1 className="h1left">Elige una opción</h1>
                    <button type="button" className="btn btn-op">Agregar mas miembros</button>
                    <button type="button" className="btn btn-op">Delegar al gestor de calidad</button>
                </div>
                <div className="ri">
                    <h1 className="h1o">Bien hecho!</h1>
                    <h2 className="h2o">Deseas agregar los demas miembros del equipo o preferies delegar esto a tu GC</h2>
                    <img src={img3} className="imgo"/>
                </div>
            </section>
        </div>
    )
}
export default Option;