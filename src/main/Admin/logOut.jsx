import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogOut() {
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
    token && localStorage.removeItem("token")
    return  navigate("/login")
}
