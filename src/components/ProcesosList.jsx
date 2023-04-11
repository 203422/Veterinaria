import React, { useState, useEffect } from 'react';
import { axiosCreate } from '../helpers/axios';
import procesosIMG from "../assets/img/19962851_6203999.jpg"

const Procesos = ({ onOptionChange }) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axiosCreate().get('process/');
    console.log(response.data)
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const saveId = (id) => {
    localStorage.setItem('idProcess', id)
    console.log(id)
    onOptionChange(4)
  }

  return (
    <div className='process-container'>
      {data.map((item) => (
        <div onClick={() => saveId(item.id) } className="process card size-card shadow p-3 mb-5 rounded" key={item.id}>
        <div className="">
            <img className="img-cards" src={procesosIMG}/>
            <h5 className="label">{item.name}</h5>
        </div>
    </div>
      ))}
    </div>
  );
}

export default Procesos;
