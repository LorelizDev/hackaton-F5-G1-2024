import React from 'react'
import imgHome from '../assets/imgHome.jpg'

function Home() {
  return (

    <>
 
  {/* Beginning of div container */}
<div className="relative max-sm:bg-light max-sm:w-screen max-sm:h-screen">

    {/*div 1 */}
  <div className="flex max-sm:ml-6">
      <p className="lg:text-5xl lg:ml-20 lg:font-mainFont lg:font-bold lg:text-dark lg:mt-20 max-sm:text-pretty max-sm:text-5xl max-sm:font-mainFont max-sm:font-black max-sm:text-dark max-sm:mt-10">
        ¿Necesitas hablar?
      </p>
  </div>

    {/* div 2 */}
  <div className="flex max-sm:ml-6">
      <p className="lg:text-3xl lg:ml-20 lg:mt-6  lg:font-mainFont lg:font-bold lg:text-medium max-sm:text-4xl max-sm:font-mainFont  max-sm:font-black max-sm:text-medium max-sm:mt-1">Estamos para ayudarte</p>      
  </div>

    {/* div 3 */}
  <div className="flex max-sm:bg-light max-sm:justify-center">
      <p className=" lg:ml-20 lg:text-black lg:font-medium lg:mt-6 lg:font-mainFont  max-sm:text-2xl max-sm:mr-8 max-sm:font-medium max-sm:ml-6 max-sm:text-left max-sm:text-prettyleading-relaxed max-sm:text-dark max-w-md max-sm:mt-6 ">
        Somos una organización sin fines de lucro dedicada a la protección del alma, centrada en la prevención del suicidio y el apoyo a personas en situación de depresión.
        Creemos en ser una armadura emocional, creando un refugio seguro donde cada persona se sienta escuchada, apoyada y protegida.
        <br/><br/>
        Juntos, cuidamos las alma vulnerables y construimos una comunidad más fuerte y solidaria.
        <br/><br/>
        Explora nuestros distintos recursos gratuitos, o si estás en un momento de crisis puedes contactar directamente con alguno de nuestros ‘Saviours’ y/o recibir ayuda adicional y urgente. 
      </p>
  </div>

    {/* div 4 */}
  <div className="flex lg:mr-20 lg:justify-end lg:-mt-96 max-sm:bg-light max-sm:justify-center ">
      <img className="lg:w-[540px] lg:h-96 lg:rounded-3xl  max-sm:w-96 max-sm:ml-6 max-sm:mr-6 max-sm:h-64 max-sm:rounded-3xl  max-sm:mt-6" src={imgHome} alt="" />
  </div>
  
</div>
  {/* End of div container */}

  </>

  )
}

export default Home