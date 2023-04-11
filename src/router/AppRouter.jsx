import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import PublicRouter from './PublicRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import { loginByToken } from '../store/thunks/userThunks';
import DashBoardRoute from './DashBoardRoute';
const AppRouter = () => {
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false)
  const {user} = useSelector(state => state.user);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      dispatch(loginByToken({ token }))
    }
    if (user?.id) setIsLogged(true);
    else setIsLogged(false);
  }, [dispatch, isLogged, user.id]);
  return (
    <Router>
        <Routes>
            <Route path='/auth/*' element={
              <PublicRouter isAuth={isLogged}> <AuthRouter /> </PublicRouter>
            }/>
            <Route path='/*' element={
              <PrivateRouter isAuth={isLogged}> <DashBoardRoute /> </PrivateRouter>
            } />
            <Route path='/register' element={<Navigate to={'/auth/register'}/>}/>
            <Route path='/login' element={<Navigate to={'/auth/login'}/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter