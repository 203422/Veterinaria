import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import DashBoard from '../Pages/DashBoard'
import SignupTeam from '../Pages/SignupTeam'

const DashBoardRoute = () => {
  return (
    <Routes>
      <Route index element={<DashBoard />}/>
      <Route path='/registerTeam' element={<SignupTeam />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default DashBoardRoute