import React, { useEffect, useState } from 'react'

import EvidenciaFase from './EvidenciaFase';
import "../assets/CardFase.css"


import { axiosCreate } from '../helpers/axios';
import { useDispatch, useSelector } from 'react-redux';

import CardPdf from './CardPdf';

const PlantillasPdf = () => {
    const [screen, setScreen] = useState(0);
    const {process, processes} = useSelector(state => state.user);
    const [plantillas, setPlantillas] = useState([])
    const dispatch = useDispatch();
  
    useEffect(() => {
        handleInput();
    }, [dispatch]);
    const handleInput = async() => {
        axiosCreate().get('evidences/findEvidence/'+process.id)
        .then(data => {
            console.log('hola'+process.id)
            console.log(data.data)
            setPlantillas(data.data);
            // dispatch(allPhases(data.data));
        });
    }
  
   
   

    return (
        <div>
            {console.log(plantillas)}
                <div>
                <button className=' btn btn-light RegresarBT' >Regresear</button>
                {
                    screen === 0 ? 
                    <div>
                        <br/>
                        <div className="review" >
                            <div className="container text-center">
                                <div className="row">
                                    {
                                        plantillas.map((f, i) => <div className="col-lg-3">
                                                <CardPdf evidence={f} />
                                            </div>)
                                    }
                                </div>
                            </div>
                            <br/>
                        </div>
                    </div>: <p>Espere por favor</p>
                }
                </div>
        </div>

    )
}

export default PlantillasPdf