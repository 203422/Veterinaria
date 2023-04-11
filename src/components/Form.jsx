import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/gestioTeam.css'
import { useForm } from '../customHooks/useForm';
import { axiosCreate } from '../helpers/axios';


const INITIALDATA = {
    entries: null,
    object : null,
    description: null,
    identifier : null,
    indicators : null,
    output: null,
    flujo_digram : null,
    outputs : null,
    frecuencia : null,
    fase: null,
    entry : null,
}



const Form = ({onOptionChange}) => {
  
  const [values, handleInputChange, reset] = useForm(INITIALDATA);
  console.log(values)
  const {user} = useSelector(state => state.user);
  
  const handleclick = async () => {
    const formData = new FormData();

    formData.append("user", user.idR);
    formData.append("isFull", true);

    for (const [key, value] of Object.entries(values)) {
      if (key != "entries" && key != "outputs"){
        if (value != null) {
          formData.append(key, value);
          if (value == "entries" || value == "outputs"){
            const arch1 = entries.files[0]
            formData.append(value, arch1, arch1.name);
          }
        }
      } 
    }

    console.log("entries:", entries.value);
    console.log("outputs:", outputs.value);

    if (entries.value !== '') {
      const arch1 = entries.files[0]
      formData.append("entries", arch1, arch1.name);
    }

    if (outputs.value !== '') {
      const arch2 = outputs.files[0]
      formData.append("outputs", arch2, arch2.name);
      
    }



    const resp = await axiosCreate().put(
      "process/" + localStorage.getItem("idProcess"),
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    if (resp.status === 200) {
      alert("Proceso actualizado exitosamente");
      onOptionChange(1);
    }
    console.log(resp);
  
  }
  
  return (
    <div className='containerForm'>
      <p onClick={() => onOptionChange(1)} style={{color: 'blue', fontSize: 20, cursor: 'pointer'}}>{"< Atras"}</p>
        <div className='form'>
            <div className='row'>
              
              <div className="col-4">
                <label htmlFor="object" className="form-label">Objetivo del proceso</label>
                <input onChange={handleInputChange} type="text" name="object" className="form-control" id="object" placeholder="Objectivo" />
              </div>
              <div className="col-4">
              <label htmlFor="description" className="form-label">Descripción del proceso</label>
                <input onChange={handleInputChange} type="text" name="description" className="form-control" id="description" placeholder="Descripción" />
              </div>
            </div>
            <div className='row'>
              <div className="col-3">
                <label htmlFor="identifier" className="form-label">Identificador del Proceso</label>
                <input onChange={handleInputChange} type="text" name="identifier" className="form-control" id="identifier" placeholder="wwww.google...." />
              </div>
              <div className="col-3">
                <label htmlFor="indicators" className="form-label">Indicadores del proceso</label>
                <input onChange={handleInputChange} type="text" name="indicators" className="form-control" id="indicators" placeholder="Indicadores" />
              </div>
              <div className="col-2">
                <label htmlFor="fase" className="form-label">Fase del proceso</label>
                <input onChange={handleInputChange} type="number" name="fase" className="form-control" id="fase" placeholder="Fase" />
              </div>
            </div>
            <div className='row'>
              <div className="col-5">
                <label htmlFor="flujo_digram" className="form-label">URL del flujo_digrama de flujo</label>
                <input onChange={handleInputChange} type="text" name="flujo_digram" className="form-control" id="flujo_digram" placeholder="wwww.google...." />
              </div>
              <div className="col-3">
                <label htmlFor="frecuencia" className="form-label">Frecuencia del proceso</label>
                <input onChange={handleInputChange} type="text" name="frecuencia" className="form-control" id="frecuencia" placeholder="1 vez" />
              </div>
            </div>
            <div className='row'>
              <div className="col-5">
                <label htmlFor="entry" className="form-label">URL de la evidencia de entrada</label>
                <input onChange={handleInputChange} type="text" name="entry" className="form-control" id="entry" placeholder="wwww.google..." disabled={values.entries ? true : false} />
              </div>
              <div className="col-3">
                <label htmlFor="entries" className="form-label">Imagen de la evidencia de entrada</label>
                <input onChange={handleInputChange} type="file" name="entries" className="form-control" id="entries" disabled={values.entry ? true : false}/>
              </div>
            </div>
            <div className='row'>
              <div className="col-5">
                <label htmlFor="output" className="form-label">URL de la evidencia de salida</label>
                <input onChange={handleInputChange} type="text" name="output" className="form-control" id="output" placeholder="wwww.google..." disabled={values.outputs ? true : false}/>
              </div>
              <div className="col-3">
                <label htmlFor="outputs" className="form-label">Imagen de la evidencia de salida</label>
                <input onChange={handleInputChange} type="file" name="outputs" className="form-control" id="outputs" disabled={values.output ? true : false}/>
              </div>
            </div>
        </div>
        <div className='btns'>
          <button onClick={handleclick} className='btn btn-success'>Agregar proceso</button>
        </div>
    </div>
  )
}

export default Form