import { useState } from "react";
import Tabla from "./Tabla";

function Form() {

    const [duenio, setDuenio] = useState([{
        'nombre': 'Alan',
        'direccion': 'San Cristobal',
        'telefono': 9671632128
    }]);

    const onSubmit = (event) => {
        event.preventDefault();



        // setDuenio([...duenio,
        // {
        //     'duenioId': 1,
        //     'nombre': 'Alan',
        //     'direccion': 'San Cristobal',
        //     'telefono': 9671632128

        // },
        // {
        //     'duenioId': 2,
        //     'nombre': 'Raul',
        //     'direccion': 'San Cristobal',
        //     'telefono': 9671458525

        // }
        // ]);

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