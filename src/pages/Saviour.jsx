import React from 'react'

function Savior() {
    return (
        <div className='bg-light h-screen'>
            <div>
                <h1 className='font-mainFont font-extrabold text-3xl text-dark '>¿Quieres ayudar?</h1>
                <h3 className='font-mainFont font-semibold text-2xl text-medium'>Conviértete en un Savior/consejero</h3>
            </div>
            <div>
                <p className='font-mainFont font-normal text-base text-dark'>Si tienes  estudios y/o experiencia en salud mental para unirse a nuestra misión de ser faros en la tormenta, guiando a quienes se sienten perdidos. Si has trabajado en voluntariados o proyectos relacionados, tu luz puede marcar una gran diferencia.<br> 
                </br> Únete a nosotros para sembrar esperanza, crear conciencia y brindar apoyo, generando un impacto positivo en quienes más lo necesitan. ¡Regístrate aquí y sé parte del cambio!</p>
            </div>
            <div className='max-w-md mx-auto flex flex-col items-center justify-center'>
                <img className='rounded-md' src="./src/img/friendship.jpg" alt="friendship" />
            </div>
        </div>
        )
    }
    
    export default Savior