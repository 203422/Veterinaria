import React from "react";
import "../assets/CardFase.css"
import imgD from "../assets/img/docs.jpg"
import deletee from "../assets/icons/delete_FILL0_wght400_GRAD0_opsz48.svg";
import edit from "../assets/icons/edit_FILL0_wght400_GRAD0_opsz48.svg"
import {useEffect} from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addPhase, addPhaseToPhases, deletePhase, modifyPhase } from "../store/slices/userSlice";
import { axiosCreate } from "../helpers/axios";


const EvidenciaFase =({onChangePage, phase})=>{
    const dispatch = useDispatch();

    useEffect(()=>{
            //mostrarAlerta()
        },[]);

   
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
  
    return(
        <div>
            <div style={{cursor: "pointer"}} onClick={handleClick} className="card size-card-fases">
                <div className="card-body shadow bg-body-tertiary rounded">
                    <img src={imgD} className="img-fases"/>
                    <h5 className="font" readonly>{phase.nombre}</h5>
                </div>
            </div>

        </div>

)
}
export default EvidenciaFase;
