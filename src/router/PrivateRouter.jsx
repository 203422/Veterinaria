import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children, isAuth }) => {
  useEffect(() => {}, [localStorage.getItem('count')])
  return !isAuth ? <Navigate to={'/auth/login'}/> : children;
}

export default PrivateRouter