import React from 'react'
import { useNavigate } from 'react-router-dom'


const Resources = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="min-h-screen bg-E1E7EE flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
          <h1 className="text-black text-5xl font-bold mb-8">Recursos</h1>
          
          <div className="grid grid-cols-1 gap-8">
            <div onClick={() => navigate('/') }className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full md:w-[90%] hover:bg-gray-100">
              <img src="src\assets\images\resources\talleres.png" alt="Talleres" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold cursor-pointerhover:text-blue-500 transition-colors duration-300 transform translate-x-2 hover:translate-x-0 transition-transform duration-300 ease-in-out" >Talleres</h2>
              </div>
            </div>

            <div onClick={() => navigate('/community')}  className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full md:w-[90%]">
              <img src="src\assets\images\resources\comunidad.png" alt="Comunidad" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2  className="text-white text-2xl font-bold cursor-pointer">Comunidad</h2>
              </div>
            </div>

            <div onClick={() => navigate('/')}  className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full md:w-[90%]">
              <img src="src\assets\images\resources\noticias.png" alt="Noticias" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold cursor-pointer">Noticias</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Resources
