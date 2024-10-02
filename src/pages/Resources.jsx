import React from 'react'
import { useNavigate } from 'react-router-dom'


const Resources = () => {
  const navigate = useNavigate();

  return (
    <>
    <h1>Recursos</h1>
    <div>
      <h2 onClick={()=> navigate(`/`)}>Talleres</h2>
    </div>
    <div>
      <h2 onClick={()=> navigate(`/community`)}>Comunidad</h2>
    </div>
    <div>
      <h2 onClick={()=> navigate(`/`)}>Noticias</h2>
    </div>
    </>
    
  )
}

export default Resources
