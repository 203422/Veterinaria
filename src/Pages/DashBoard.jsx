import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Aside from '../components/Aside';
import SubDashboard from './SubDashboard';

import '../assets/dashboardG.css'

const DashBoard = () => {
  return (
      <div className='container-menu'>
        <div className='menu-h col-lg-2 border-end border-2'>
          <Aside />
        </div>
        <div className='menu-d'>
          <div className='top-menu'>
              <div className='text'>
                <p>Individualmente somos una gota...</p>
                <span>Juntos, somos el mar</span>
              </div>
              <div className='image'>
                
              </div>
          </div>
          <div className='content'>
                <SubDashboard />
          </div>
        </div>
    </div>
  )
}

export default DashBoard