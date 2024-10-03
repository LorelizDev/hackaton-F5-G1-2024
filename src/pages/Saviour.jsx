import React from 'react'
import friendship from '../assets/friendship.jpg'  // Ruta correcta de la imagen

function Saviour() {
    return (
        <>
        {/* Beginning of div container */}
        <div className="relative max-sm:bg-light max-sm:w-screen max-sm:h-screen">

            {/* Grid container for large screens */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:px-20 lg:py-20 max-sm:flex max-sm:flex-col">

                {/* Text section */}
                <div className="lg:ml-0 lg:my-auto max-sm:ml-6">
                    {/* div 1 */}
                    <p className="lg:text-5xl font-mainFont lg:font-bold lg:text-dark lg:mt-0 max-sm:text-pretty max-sm:text-5xl  max-sm:font-black max-sm:text-dark max-sm:mt-10">
                        ¿Quieres ayudar?
                    </p>

                    {/* div 2 */}
                    <p className="lg:text-3xl lg:mt-4 lg:font-mainFont lg:font-bold lg:text-medium max-sm:text-4xl max-sm:font-mainFont max-sm:font-black max-sm:text-medium max-sm:mt-2">
                        Conviértete en un Savior/consejero
                    </p>

                    {/* div 3 */}
                    <p className="lg:text-black lg:font-medium lg:mt-6 font-mainFont lg:leading-relaxed max-sm:text-2xl max-sm:mr-8 max-sm:font-medium max-sm:ml-1 max-sm:text-left max-sm:text-dark max-w-md max-sm:mt-6">
                        Si tienes estudios y/o experiencia en salud mental para unirte a nuestra misión de ser faros en la tormenta, guiando a quienes se sienten perdidos. Si has trabajado en voluntariados o proyectos relacionados, tu luz puede marcar una gran diferencia.
                        <br/><br/>
                        Únete a nosotros para sembrar esperanza, crear conciencia y brindar apoyo, generando un impacto positivo en quienes más lo necesitan. ¡Regístrate <a className='text-medium font-semibold' href="url">aquí</a> y sé parte del cambio!
                    </p>
                </div>

                {/* Image section */}
                <div className="lg:mr-0 lg:flex lg:justify-center lg:items-center max-sm:mt-6">
                    <img className="lg:w-[540px] lg:h-96 lg:rounded-3xl drop-shadow-md max-sm:w-96 max-sm:ml-6 max-sm:mr-6 max-sm:h-64 max-sm:rounded-3xl" src={friendship} alt="Savior" />
                </div>

            </div>

        </div>
        {/* End of div container */}
        </>
    )
}

export default Saviour
