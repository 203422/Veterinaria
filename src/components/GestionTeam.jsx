import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/css/gestioTeam.css';
import { getUserDifferentOfId } from '../helpers/requests/users';
import { columns } from '../utils/columnsUser';
import Table from './Table';


const GestionTeam = () => {
  const [data, setData] = useState(0);
  const { user } = useSelector(state => state.user);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    console.log(localStorage.getItem('token'));
    getUserDifferentOfId(user.id).then(res => {
      setData(res.data.map(r => ({
        Id: r.id, Nombre: r.name, Roles: r.rolls.map(r => r.name), Actions: ''
      })));

    }).catch(r => setData([]));
  }, [token])

  const handleClick = () => {
    navigate('/registerTeam')
  }
  
  if (data !== 0)
    return (
      <div className='card card-body containerTeam'>
        <div className='buttonC'>
          <button onClick={handleClick} type="button" className="buttonA btn btn-secondary">Agregar usuario</button>
        </div>
        <Table columns={columns} data={data}/>
      </div>
    )
  return "Espere por favor"
}

export default GestionTeam