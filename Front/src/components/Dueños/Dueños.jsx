import { useEffect, useState } from 'react';
import Form from './Form'
import Tabla from './Tabla';

function Dueño() {

    const [dueno, setDueno] = useState([]);

    useEffect(() => {
        getDuenios();
    }, [])

    const eliminar = (id) => {
        if(!confirm('Desea eliminar este usuario')) {
            return;
        }

        const peticion = {
            method: 'DELETE',
            headers: {
                'Acept': 'application/json',
                "Content-type": "application/json"
            }
        }

        eliminarDuenio(peticion, id);
            
    }


    const getDuenios = async ()  => {
        const dato = await fetch('http://localhost:8080/usuarios')
        const duenos =   await dato.json()
        setDueno(duenos)
    }

    const eliminarDuenio = async(peticion, id) => {
        const dato = await fetch('http://localhost:8080/usuarios/' + id, peticion)
        getDuenios()
    }

    return (
        <div>
            <Form />
            <Tabla duenos={dueno} eliminar={eliminar} />
        </div>
    )
}

export default Dueño;