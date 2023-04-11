import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/gestioTeam.css'
import { useForm } from '../customHooks/useForm';
import { axiosCreate } from '../helpers/axios';
import defaultPerfil from '../assets/img/avatar-removebg-preview.png'

const INITIALDATA = {
    nombre: null,
    last_name: null,
    password1: null,
    password2: null,
    password3: null,
}


const FormPerfil = ({onOptionChange}) => {
  
    const [values, handleInputChange, reset] = useForm(INITIALDATA);
    console.log(values)
    const {user} = useSelector(state => state.user);

    console.log(user.id)
    
    const handleclick = async (option) => {
      const formData = new FormData();

      console.log("enviando")
  
      if (option === 1){
        formData.append("name", values.nombre);
        formData.append("last_name", values.last_name);


        const resp = await axiosCreate().put(
          "users/name/" + user.id,
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        if (resp.status === 200) {
          alert("Se actualizo el nombre");
          onOptionChange(1);
        }
        console.log(resp);
      }
      if (option === 2){
        formData.append("password1", values.password1);
        formData.append("password2", values.password2);
        formData.append("password3", values.password3);

        const resp = await axiosCreate().put(
          "users/password/" + user.id,
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        if (resp.status === 200) {
          alert("Se actualizado la contraseña");
          onOptionChange(1);
        }
        console.log(resp);
      }
    
    }
    
    return (
      <div className='containerForm'>
        <p onClick={() => onOptionChange(1)} style={{color: 'blue', fontSize: 20, cursor: 'pointer'}}>{"< Atras"}</p>
          <div className='form-user'>
              <div className="form-perfil">
                <h4>Editar nombre</h4>
          
                <div className="content">
                  <div className="inputs">
                    <div className="input">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input onChange={handleInputChange} type="text" name="nombre" className="form-control" id="nombre" placeholder="Nombre" />
                    </div>
                    
                  </div>
                  <div className="inputs">
                    <div className="input">
                      <label htmlFor="last_name" className="form-label">Apellidos</label>
                      <input onChange={handleInputChange} type="text" name="last_name" className="form-control" id="last_name" placeholder="Apellidos" />
                    </div>
                  </div>
                  <div className="inputs">
                   
                  </div>
                  <div className="btns-form">
                      <button onClick={() => handleclick(1)} className='boton-form'>Actualizar información</button>
                  </div>

                </div>

              </div>

              <div className="form-perfil">

                <h4>Editar contraseña</h4>

                <div className="content">
                  <div className="inputs">
                    <div className="input">
                      <label htmlFor="password1" className="form-label"> Contraseña actual</label>
                      <input onChange={handleInputChange} type="text" name="password1" className="form-control" id="password1" placeholder="Contraseña actual" />
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="input">
                      <label htmlFor="password2" className="form-label">Nueva contraseña</label>
                      <input onChange={handleInputChange} type="text" name="password2" className="form-control" id="password2" placeholder="Nueva contraseña" />
                    </div>
                  
                  </div>
                  <div className="inputs">
          
                    <div className="input">
                      <label htmlFor="password3" className="form-label">Confirmar contraseña</label>
                      <input onChange={handleInputChange} type="text" name="password3" className="form-control" id="password3" placeholder="Confirmar contraseña" />
                    </div>
                  </div>
                  <div className="btns-form">
                      <button onClick={() => handleclick(2)} className='boton-form'>Actualizar información</button>
                  </div>

                </div>


              </div>


          </div>
      </div>
    )
  }
  
  export default FormPerfil