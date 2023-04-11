import React, { useEffect, useState } from "react";
import "../assets/dashboardG.css"
import GestionFases from "../components/GestionFases";
import GestionTeam from "../components/GestionTeam";
import "../assets/dashboardG.css"
import Manual from '../components/Manual'
import { useSelector } from "react-redux";
import Form from "../components/Form";
import CarpetaEvidencias from "../components/CarpetaEvidencias"
import FormPerfil from "../components/FormPerfil";
import Procesos from "../components/ProcesosList";
import Anexos from '../components/Anexos';

const rolesG = [
    'SCRUM', 'QUALITY MANAGER', 'SOFTWARE ARCHITECT', 'PRODUCT OWNER', 'DEVELOPER','REQUIREMENTS', 'DESIGNER'
]

const rolesM = ['MANAGER', 'QUALITY MANAGER'];

const rolesGest = ['QUALITY MANAGER'];

const SubDashboard =()=>{
    const { user } = useSelector(state => state.user);
    const [manual, setManual] = useState(false);
    const [manager, setManager] = useState(false);
    const [gestor, setGestor] = useState(false);
    const [option, setOption] = useState(0);
    
    useEffect(() => {
        user.rolls.map(roll => {
            if (rolesG.includes(roll)) {
                setManual(true);
                setOption(1);
            }
            if (rolesM.includes(roll)){
                setManager(true);
                setOption(3);
            }
            if (rolesGest.includes(roll)) {
                setGestor(true);
                setOption(1);
            }
        });
        console.log(rolesG)
    }, [])
    

    const handleClick = (option) => {
        setOption(option);
    }

    return(        
            
        <>
                <div className="containerBtn">
                { manual && <button onClick={() => {handleClick(1)}} className="opciones">Manual</button> }
                { gestor && <button onClick={() => {handleClick(2)}} className="opciones">Gestión de fases</button>}
                { manager && <button onClick={() => {handleClick(3)}} className="opciones">Gestión de equipo</button>}
                <hr className="lineaH"/>
                </div>  
                <div className="containerContent">
                {
                    option == 1 &&  <Manual onOptionChange= {setOption}/>
                }
                {
                    option == 2 && <GestionFases />
                }
                {
                    option == 3 && <GestionTeam />
                }
                {
                    option == 4 && <Form onOptionChange={setOption}/>
                } 
                {
                    option == 5 && <Procesos onOptionChange= {setOption}/>
                }
                {
                    option == 6 && <FormPerfil onOptionChange= {setOption}/>
                }
                {
                    option == 5 && <CarpetaEvidencias onOptionChange={setOption}/>
                }
                {
                    option == 7 && <Anexos onOptionChange={setOption}/>
                }
                </div>
            
        </>
    )
}
export default SubDashboard;