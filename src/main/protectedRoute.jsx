import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import Admin from './Admin/Admin'


export default function ProtectedRoute({islogin}) {
  console.log(islogin)
  if(!islogin){
    return <Navigate to="/login" />
  }
  else{
     return <Outlet/>
  }
}
