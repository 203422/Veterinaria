import React, { useEffect, useState } from 'react'

import "../assets/Procesos.css"
import { useDispatch, useSelector } from 'react-redux';
import { axiosCreate } from '../helpers/axios';
import { addProcess, allProcesses, deleteProcess } from '../store/slices/userSlice';
import Cardproceso from './CardProceso';
import PlantillasPdf from './PlantillasPdf';

const ProcesosEvidencias = () => {
    const {phase, processes} = useSelector(state => state.user);
    const [screen, setScreen] = useState(0);
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
    const handleClick = () => {
        
        setScreen(0)
    }
 


  return (
    <div>
   
        <div>
        <button className=' btn btn-light RegresarBT' onClick={handleClick}>Regresear</button>
        {
            screen === 0 ? 
            <div>
                <br/>
                <div className="review" >
                    <div className="container text-center">
                        <div className="row">
                            {
                            processes.map((f, i) => <div className="col-lg-3">
                              <Cardproceso process={f} onChangePage={setScreen}/>
                                      </div>)
                            }
                        </div>
                    </div>
                    <br/>
                </div>
            </div>: <PlantillasPdf/>/*<p>Espere por favor</p>*/ /*<ProcesosEvidencias />*/
        }
        </div>
    </div>
  )
}

export default ProcesosEvidencias