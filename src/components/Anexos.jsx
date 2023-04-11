import React, { useEffect, useState } from 'react'
import '../assets/Anexos.css'
import { useDispatch, useSelector } from 'react-redux';
import { axiosCreate } from '../helpers/axios';
import { allPhases, allProcesses } from '../store/slices/userSlice';
import CardAnexo from './CardAnexo';
import AnexoP from './AnexoP';
const Anexos = ({ onOptionChange }) => {
    const [screen, setScreen] = useState(0);
    const handleClick = () => {
        setScreen(1)
    }
    const dispatch = useDispatch();
    const phase = useSelector(phase => phase.user);

    useEffect(() => {
        hanfleHttp();
    }, [dispatch]);

    const hanfleHttp = async () => {
        axiosCreate().get('phases/')
            .then(data => {
                dispatch(allPhases(data.data));
            });
        axiosCreate().get('evidences/findAnexo/1')
            .then(data => {
                dispatch(allProcesses(data.data));
            })
    }
    return (
        <div className='containerAnexos'>
            <h4 className='title_anexo'>Anexos</h4>
            {
                screen === 0 ?

                    phase.phases.map((f, i) =>
                        <CardAnexo phase={f} onChangePage={setScreen} />
                    ) : <AnexoP onChangePage={setScreen} />
            }
        </div>
    )
}
export default Anexos;




