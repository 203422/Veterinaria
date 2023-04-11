import imgAnexo from '../assets/img/19962851_6203999.jpg'
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allPhases, allProcesses } from '../store/slices/userSlice';
import { axiosCreate } from '../helpers/axios';

const AnexoP = ({ onChangePage }) => {

    const { phase, processes } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        hanfleHttp();
    }, [dispatch]);

    const hanfleHttp = async () => {
        axiosCreate().get('process/fase/' + phase.id)
            .then(data => {
                dispatch(allProcesses(data.data));
            })
    }

    const handleClick = () => {
        onChangePage(0)
    }


    const mostrarEvidencia = () => {
        axiosCreate().get('evidences/findAnexos/')
            .then(data => console.log(data))
    }

    return (
        <>
            <p className='atras-anexo' onClick={handleClick} style={{ color: 'blue', fontSize: 20, cursor: 'pointer' }}>{"< Atras"}</p>

            {
                processes.map(p => (
                    <div className='card shadow p-3 mb-5 bg-body-tertiary rounded card-anexo' onClick={() => mostrarEvidencia(phase.nombre, p.name)}>
                        <div className="card_data">
                            <img className='img_anexo' src={imgAnexo}  />
                            <h5 className="label">{p.name}</h5>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default AnexoP;