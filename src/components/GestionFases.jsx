import React, { useEffect, useState } from 'react'
import CardFase from "../components/CardFase"
import "../assets/CardFase.css"
import Swal from "sweetalert2";
import Procesos from './Procesos';
import { axiosCreate } from '../helpers/axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPhase, addPhaseToPhases, allPhases, clearPhases } from '../store/slices/userSlice';

const GestionFases = () => {
    const [screen, setScreen] = useState(0);
    const [phases, setPhases] = useState([])
    const dispatch = useDispatch();
    const state = useSelector(state => state.user);
    useEffect(() => {
        hanfleHttp();
    }, [dispatch, setPhases]);

    const hanfleHttp = async() => {
        axiosCreate().get('phases/')
        .then(data => {
            dispatch(allPhases(data.data));
        });
    }
    const mostrarAlertaMasFase=()=>{
        Swal.fire({
            title: 'Ingresa los datos',
            html:
                '<input id="txtNombre" class="swal2-input" placeholder="Nombre de fase">' +
                '<input id="txtDescripcion" class="swal2-input" placeholder="Descripcion">'+
                '<input id="txtObjetivo" class="swal2-input" placeholder="Objetivo">',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            backdrop: true
        }).then((result) => {
            if (result.isConfirmed) {
                const nombreN = document.getElementById('txtNombre').value;
                const descrN = document.getElementById('txtDescripcion').value;
                const obejitvoN = document.getElementById('txtObjetivo').value;
                const nombre = document.getElementById('txtNombre').value;
                const descr = document.getElementById('txtDescripcion').value;
                const obejitvo = document.getElementById('txtObjetivo').value;
                axiosCreate().post('phases/', {
                    nombre, descripcion: descr, objetivo: obejitvo
                }).then(d => {
                    dispatch(addPhaseToPhases(d.data));
                });
            }
        });

    }
    const handleClick = () => {
        dispatch(clearPhases())
        setScreen(0)
    }

    return (
        <div>
            {console.log(state.phases)}
                <div>
                <button className=' btn btn-light RegresarBT' onClick={handleClick}>Regresear</button>
                {
                    screen === 0 ? 
                    <div>
                    <button type="button" className="btn btn-light agregarFase" onClick={mostrarAlertaMasFase}>Agregar Fase</button>
                        <div className="review" >
                            <div className="container text-center">
                                <div className="row">
                                    {
                                        state.phases.map((f, i) => <div className="col-lg-3">
                                                <CardFase phase={f} onChangePage={setScreen}/>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>: <Procesos />
                }
                </div>
        </div>

    )
}

export default GestionFases