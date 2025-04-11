import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {student} = useContext(AuthContext)
  return (
   student ? <Outlet/> : <Navigate to="/login"/>
   
  )
}

export default PrivateRouter