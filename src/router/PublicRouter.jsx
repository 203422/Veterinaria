import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({ children, isAuth }) => {
  return isAuth ? <Navigate to={'/'}/> : children
}

export default PublicRouter