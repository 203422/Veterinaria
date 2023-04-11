import React from 'react'
import pruebaF from "../assets/img/avatar-removebg-preview.png"
import "../assets/dashboardG.css"
import calendar from "../assets/icons/calendar.svg"
import menu from "../assets/icons/menu.svg"
import table from "../assets/icons/table.svg"
import { useDispatch, useSelector } from 'react-redux'
import { closeSesion } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
const Aside = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = () => {
    dispatch(closeSesion());
    localStorage.removeItem('token');
  }

  return (
    <div className='containerAside'>
    <div className='containerText'>
      <div className="head">
          <h1 className="titulo">Gestión de archivos</h1>
      </div>
      <img className="img-Perfil" src={pruebaF}/>
      <h1 className="saludo">Hola,</h1>
      <h1 className="nameUser">{user.name}</h1>
      <div className="group1">
          <h1 className="title-w">Dashboard</h1>
          <img className="icons" src={menu}/>
          <h1 className="par">Menu</h1>
          <br/>
          <img className="icons" src={calendar}/>
          <h1 className="par">Calendario</h1>
          <br/>
          <img className="icons" src={table}/>
          <h1 className="par">Tablero</h1>
      </div>
      <div className="group1">
          <h1 style={{cursor: 'pointer'}} onClick={() => navigate('/about')} className="title-w">Acerca de</h1>
          <img className="icons" src={menu}/>
          <h1 className="par">Menu</h1>
          <br/>
          <img className="icons" src={calendar}/>
          <h1 className="par">Calendario</h1>
          <br/>
          <img className="icons" src={table}/>
          <h1 className="par">Tablero</h1>
      </div>
    </div>
    <div className="cerrarSesion">
        <button onClick={handleClick} className='btn btn-danger'>Cerrar Sesión</button>
    </div>
    </div>
  )
}

export default Aside