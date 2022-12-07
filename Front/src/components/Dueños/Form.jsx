import { useState } from "react";
import Tabla from "./Tabla";

function Form({ agregar }) {

    const [nuevoDuenio, setNuevoDuenio] = useState([])


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nuevoDuenio.nombre || !nuevoDuenio.direccion || !nuevoDuenio.telefono) {
            alert("Campos vacios")
            return;
        } else {
            agregar(nuevoDuenio);
        }
        handleReset();

    }

    const handleChange = (event) => {
        setNuevoDuenio({ ...nuevoDuenio, [event.target.name]: event.target.value })
    }

    const aux = {
        nombre: "",
        direccion: "",
        telefono: ""
    }

    const handleReset = (e) => {
        setNuevoDuenio(aux);
    }


    return (
        <div>
            <form className="fr" onSubmit={handleSubmit} >
                <input type="text" id="nombre" name="nombre" placeholder="Nombre" onChange={handleChange} />
                <input type="text" id="direccion" name="direccion" placeholder="Direccion" onChange={handleChange} />
                <input type="text" id="telefono" name="telefono" placeholder="Telefono" onChange={handleChange} />

                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" />

            </form>

        </div>
    )
}

export default Form;