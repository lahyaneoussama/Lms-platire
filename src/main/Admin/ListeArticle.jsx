import React, { useEffect, useState } from 'react'
import "./css/article.css"
import axios from 'axios'
export default function ListeArticle() {
    const [articles,setArticle]=useState([])
    const [res_Delete,setResponse]=useState()
    const delete_article=async(id)=>{
        await axios.delete(`http://127.0.0.1:8000/api/admin/destroy/${id}`).then(res=>console.log(res))
        const new_articles=articles.filter(item=>item.id==id)
        setArticle(new_articles)
    }
    const download=(image_name)=>{
        return window.open(`http://127.0.0.1:8000/api/downlod_image/storage/${image_name}`)
    }
    const afficher_article=()=>articles.map((item)=> <div key={item?.id} class="card">
        <img  src={`http://127.0.0.1:8000/storage/${item.image}`} alt="Image" class="card-img"/>
        <div class="card-body">
            <h5 class="card-title">{item?.name}</h5>
            <p class="card-description">{item?.description}</p>
            <div class="card-actions">
                <button class="btn-edit" style={{backgroundColor:"blue"}}>Modifier</button>
                <button class="btn-delete" onClick={()=>delete_article(item.id)} style={{backgroundColor:"red"}}>Supprimer</button>
                <button class="btn-dell" onClick={()=>download(item.image)} style={{backgroundColor:"green"}}>download</button>
            </div>
        </div>
    </div>
    )
    
    console.log(articles)
    const getArticle=async()=>await axios.get("http://127.0.0.1:8000/api/admin/show")
    .then(res=>setArticle(res.data))
    useEffect(()=>{
        getArticle()
    },[articles])
  return (
   <div style={{display:'flex',justifyContent:"space-around", }}> 
    {afficher_article()}
   </div>

  )
}
