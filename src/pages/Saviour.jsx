import React from 'react'
import NavBar from '../components/NavBar'

function Savior() {
    return (
        <div className='bg-light min-h-screen h-full'>
            <NavBar/>
            <div className='px-4 py-8'>
                <h1 className='font-mainFont font-extrabold text-4xl sm:text-3xl text-dark '>¿Quieres ayudar?</h1>
                <h3 className='font-mainFont font-semibold text-3xl sm:text-2xl text-medium mt-2'>Conviértete en un Savior/consejero</h3>
            </div>
            <div className='px-4 mt-4'>
                <p className='font-mainFont font-normal text-sm sm:text-base text-dark leading-relaxed'>
                    Si tienes estudios y/o experiencia en salud mental para unirse a nuestra misión de ser faros en la tormenta, guiando a quienes se sienten perdidos. Si has trabajado en voluntariados o proyectos relacionados, tu luz puede marcar una gran diferencia.<br />
                    <br />
                    Únete a nosotros para sembrar esperanza, crear conciencia y brindar apoyo, generando un impacto positivo en quienes más lo necesitan. ¡Regístrate <a className='text-medium font-semibold' href="url">aquí</a> y sé parte del cambio!
                </p>
            </div>
            <div className='max-w-sm mx-auto flex flex-col items-center justify-center mt-6 px-4'>
                <img className='rounded-md w-full h-auto' src="./src/img/friendship.jpg" alt="friendship" />
            </div>
        </div>
    )
}

export default Savior