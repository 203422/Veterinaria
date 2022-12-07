import { useState } from "react";
import Tabla from "./Tabla";

function Form() {

    const onSubmit = (event) => {
        event.preventDefault();

    }

    const handleChange = (event) => {
        console.log(event.target.value);
    }


    return (
        <div>
            <form className="fr" onSubmit={onSubmit} >
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
                <input type="text" name="direccion" placeholder="Direccion" onChange={handleChange} />
                <input type="number" name="telefono" placeholder="Telefono" onChange={handleChange} />

                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" />

            </form>

        </div>
    )
}

export default Form;