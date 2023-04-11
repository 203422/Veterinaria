import React from "react";
import "../assets/CardFase.css"
import imgD from "../assets/img/docs.jpg"
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { addProcess, addtemProcess } from "../store/slices/userSlice";



const Cardproceso =({onChangePage, process})=>{
    const dispatch = useDispatch();

    useEffect(()=>{
            //mostrarAlerta()
        },[]);
    const handleClick = () => {
        dispatch(addtemProcess({
            id: process.id,
            name : process.name
        }));
        onChangePage(2)
    }
   
   
  
    return(
        <div>
            <div style={{cursor: "pointer"}} onClick={handleClick} className="card size-card-fases">
                <div className="card-body shadow bg-body-tertiary rounded">
                    <img src={imgD} className="img-fases"/>
                    <h5 className="font" readonly>{process.name}</h5>
                    <h6 className="font2" readonly>{process.responsable?.name}</h6>
                </div>
            </div>

        </div>

)
}
export default Cardproceso;
