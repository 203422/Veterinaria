import React, { useEffect, useState } from 'react'
import CardFase from "../components/CardFase"
import EvidenciaFase from './EvidenciaFase';
import "../assets/CardFase.css"
import Swal from "sweetalert2";
import ProcesosEvidencias from './ProcesosEvidencias';
import { axiosCreate } from '../helpers/axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPhase, addPhaseToPhases, allPhases, clearPhases } from '../store/slices/userSlice';

const CarpetaEvidencias = () => {
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
                        <br/>
                        <div className="review" >
                            <div className="container text-center">
                                <div className="row">
                                    {
                                        state.phases.map((f, i) => <div className="col-lg-3">
                                                <EvidenciaFase phase={f} onChangePage={setScreen}/>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>: <ProcesosEvidencias />
                }
                </div>
        </div>

    )
}

export default CarpetaEvidencias