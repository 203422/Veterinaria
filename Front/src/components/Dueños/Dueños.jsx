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

    const agregar = (datos) => {

        const peticion = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Acept': 'application/json',
                "Content-type": "application/json"
            }
        } 
        
        agregarDuenio(peticion);
    }

    const actualizar = (datos) => {

        const peticion = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Acept': 'application/json',
                "Content-type": "application/json"
            }
        } 
        
        actualizarDuenio(peticion);
    }

    const getDuenios = async ()  => {
        const dato = await fetch('http://localhost:8080/usuarios')
        const duenos =   await dato.json()
        setDueno(duenos)
    }

    const agregarDuenio = async(peticion) => {
        const dato = await fetch('http://localhost:8080/usuarios', peticion)
        getDuenios()
    }

    const eliminarDuenio = async(peticion, id) => {
        const dato = await fetch('http://localhost:8080/usuarios/' + id, peticion)
        getDuenios()
    }

    const actualizarDuenio = async(peticion, id) => {
        const dato = await fetch('http://localhost:8080/usuarios/' + id, peticion)
    }

    return (
        <div>
            <Form agregar={agregar} />
            <Tabla duenos={dueno} eliminar={eliminar} actualizar={actualizar} />
        </div>
    )
}

export default Dueño;