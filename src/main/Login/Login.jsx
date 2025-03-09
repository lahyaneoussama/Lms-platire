import React, {  useEffect, useRef, useState } from 'react';
import "./css/Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const email=useRef()
    const password=useRef()
    const [info,setInfo]=useState({})
    const navigate=useNavigate()
    const getCsrf=async()=>await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie",{withCredentials:true})
    const handle_login=async(e)=>{
        e.preventDefault()
        setInfo({
            email:email.current.value,
            password:password.current.value
        })
        const resp=await axios.post("http://127.0.0.1:8000/api/login",info).then(res=>{localStorage.setItem("token",res.data.token)
            return res
        })
        .catch(e=>console.log(e.message))
        resp?.data?.isConnected ? navigate("/admin") : console.log("login non correct")
        console.log(resp?.data?.isConnected )
    }
    useEffect(()=>{
        getCsrf()
    },[])
  return (
    <div className="container-login">
 
    <div className="left-panel">
        
            <div className='LogoWhite'>
                <div className="images">
                <img src="" alt="" />
                </div>
            </div>
       
        <h1>Bienvenue de retour!</h1>
        <p>Nous concevons des décorations en plâtre élégantes et durables, adaptées à tous les styles. Chaque projet est une œuvre d'art,
             alliant précision et professionnalisme pour sublimer votre intérieur.</p>
        
    </div>

   
    <div className="right-bg">
    <div className="right-panel">
        <p className='Aides'>Connectez-vous à votre compte pour continuer</p> 

        <form method='post'>
            <div className="form-group">
                <label for="email">Nom utilisateur</label>
                <input type="email" id="email" placeholder="E-mail" ref={email} required />
            </div>

            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password"  ref={password}required />
            </div>

            <div className="form-actions">
                <a href="#">Mot de passe oublié?</a>
            </div>

        <button type="submit" className="submit-button" onClick={(e)=>handle_login(e)}>SE CONNECTER</button>
        </form>


        <div class="signup-link">
            <p>Vous n'avez pas de compte ? <a href="#">Inscrivez-vous</a></p>
        </div>
    </div>
</div>
</div>
  )
}
