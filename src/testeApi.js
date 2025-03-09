import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export default function TesteApi() {
    const email=useRef()
    const password=useRef()
    const [user,setuser]=useState({})
    const urlCsrf="http://127.0.0.1:8000/sanctum/csrf-cookie"
    const getToken=async()=>await axios.get(urlCsrf,{
        withCredentials:true
    })
    const login=async()=>{
        return await axios.post("http://127.0.0.1:8000/api/login",{
            email:"test@example.com",
            password:"test@example.com"
        }).then(res=>console.log(res))
        .catch(err=>console.error(err))
    }
    useEffect(()=>{
    getToken()
    login()
    },[user])
    async function onclick(e){
        e.preventDefault()
        setuser({
            email:email.currentTarget.value,
            password:password.currentTarget.value
        })
    }

    console.log(user)
  return (
    <div>
        <form method='post'>
      name:<input type="text" className="form-control mb-2 mr-sm-2" placeholder="Jane Doe" ref={email} name='email' />
      password:<input type="text" className="form-control mb-2 mr-sm-2" placeholder="Jane Doe"ref={password} name='password' />
  
        </form> <input onclick={onclick} type='submit'/>
    </div>
  )
}
