import React, { useEffect, useState } from 'react'
import Table from "./Table";
import Swal from "sweetalert2";
import "../assets/Procesos.css"
import { useDispatch, useSelector } from 'react-redux';
import { axiosCreate } from '../helpers/axios';
import { addProcess, allProcesses, deleteProcess } from '../store/slices/userSlice';
import DeleteIcon from "../assets/icons/delete_black_24dp.svg";

const Procesos = () => {
    const {phase, processes} = useSelector(state => state.user);
    const [rolls, setRolls] = useState([])
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    useEffect(() => {
        handleInput();
    }, [dispatch]);
    const handleInput = () => {
        axiosCreate().get('rolls/getRolls/').then(d => {
            setRolls(d.data);
        })
        axiosCreate().get('process/fase/'+phase.id).then(d => {
            console.log(d.data);
            dispatch(allProcesses(d.data));

        });
    }

    const mostrarAlertaDeleteProceso=(id)=>{
        Swal.fire({
                icon: "warning",
                title: "Alerta",
                html:"<p>¿Deseas eliminar este proceso?</p>",
                showDenyButton: true,
                denyButtonText: "No",
                confirmButtonText: "Si",

            }
        ).then((r) => {
            if (r.isConfirmed){
                axiosCreate().delete('process/'+id)
                .then((d) => {
                    dispatch(deleteProcess(d.data));
                })
            }
        });
    }
  const mostrarAlertaMasProceso=()=>{


      Swal.fire({
          title: 'Ingresa los datos',
          html:`<br>
                <input id="txtNombre" class="swal2-input" placeholder="Nombre de fase">
                <br/>
                <select class="form-select swal2-inputOption" id="lista" data-style="btn-warning" data-live-search="true" >
                    <option value="-1">Seleccione una opción</option>
                    ${rolls.map(r => `<option value="${r.id}">${r.name}</option>`)}
                </select>                   
                <br>`,
          showCancelButton: true,
          confirmButtonText: 'Guardar',
          cancelButtonText: 'Cancelar',
          backdrop: true
      }).then((r) => {
        if (r.isConfirmed){
            const name = document.getElementById('txtNombre').value;
            const responsable_id = document.getElementById('lista').value;
            axiosCreate().post('process/', {name, responsable_id, phase_id: phase.id})
                .then(d => dispatch(addProcess(d.data)))
        }
      })
  }

  return (
      <div>
            
            {(processes && rolls.length > 0) ? <div>
                <div>
                    <button type="button" className="btn btn-light agregarProcesos" onClick={mostrarAlertaMasProceso}>Agregar Proceso</button>
                  </div>
                <div className="overflow-auto review-P">
                    {
                        <table className="table">
                            <thead>
                            <tr className="color-t">
                                <th scope="col"># Procesos</th>
                                <th scope="col">Identificador</th>
                                <th scope="col">Responsable</th>
                                <th scope="col">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                processes.map(p => <>
                                    <tr className="table-primary">
                                    <th scope="row">{p.id}</th>
                                    <td>{p.name}</td>
                                    <td>{p.responsable?.name}</td>
                                <button onClick={() => mostrarAlertaDeleteProceso(p.id)} type="button" className="btn buttonE btn-sm"><img src={DeleteIcon}/></button>
                            </tr>
                                </>)
                            }
                            </tbody>
                        </table>
                    }
                </div>
            </div>: <p>Espere por favor</p>}
      </div>
      
  )
}

export default Procesos