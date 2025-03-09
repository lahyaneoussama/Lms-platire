<<<<<<< HEAD
import React from 'react'
import { useState } from 'react';
import Headeradmin from './Headeradmin';
import  './css/ajouteproduit.css'
=======
import axios from 'axios';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5

export default function Ajouterdecoration() {
  const name=useRef()
  const description=useRef()
  const image=useRef()
  const navigate=useNavigate()
      const handleSubmit =async (e) => {
        e.preventDefault();
        const formData=new FormData()
        formData.append("name",name.current.value)
        formData.append("description",description.current.value)
        formData.append("image",image.current.files[0])
        return navigate("/admin/list_Articles")
        
        await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        const res=await  axios.post("http://127.0.0.1:8000/api/admin/create",formData,{
          headers: { 'Content-Type': 'multipart/form-data' }
        }).catch(e=>console.log(e))
        console.log(res)
      };
   
      return (
<<<<<<< HEAD
        <>
        <Headeradmin/>
        <div className="container-dash">
=======
        <div className="container-dash ">
>>>>>>> 4c2e91f52f5b74a181aef3034f00301cd41475c5
          <h2>Ajouter un Produit</h2>
          <form onSubmit={handleSubmit} method='post' >
            <input
            ref={name}
              type="text"
              name="name"
              placeholder="name du produit"
              required
            />
              <textarea ref={description} placeholder='entrer de description de prouduit'></textarea>
            
            <input type='file'
            ref={image}
              name="description"
              placeholder="Images"
              required
              accept='image/*'
            />
            <button  type="submit">Valider</button>
          </form>
        </div>
        </>
      )}
