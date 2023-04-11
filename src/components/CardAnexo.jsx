import imgAnexo from '../assets/img/anexo.png'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allPhases, allProcesses, addPhase } from '../store/slices/userSlice';
import { axiosCreate } from '../helpers/axios';
import AnexoP from './AnexoP';

const CardAnexo = ({ onChangePage, phase }) => {
  const dispatch = useDispatch();
  const processes = useSelector(state => state.user.processes);

  const handleClick = () => {
    dispatch(addPhase({
      id: phase.id,
      descripcion: phase.descripcion,
      nombre: phase.nombre,
      numero_procesos: phase.numero_procesos,
      objetivo: phase.objetivo
    }));
    onChangePage(1)
  }

  useEffect(() => {
    hanfleHttp();
  }, [dispatch]);

  const hanfleHttp = async () => {
    axiosCreate().get('process/')
      .then(data => {
        dispatch(allProcesses(data.data));
      })
  }

  return (
    <>
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded card-anexo" onClick={handleClick} >
        <div className="card_data">
          <img className='img_anexo' src={imgAnexo} />
          <h5 className="label">{phase.nombre}</h5>
        </div>
      </div>
    </>
  );
}

export default CardAnexo;

