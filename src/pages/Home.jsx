import React from 'react'
import imgHome from '../assets/imgHome.jpg'
import HelpButton from '../components/HelpButton'


function Home() {
  return (

    <>
 
  {/* Beginning of div container */}
<div className="relative max-sm:bg-light max-sm:w-screen max-sm:h-screen">

    {/*div 1 */}
  <div className="flex max-sm:ml-6">
      <p className="max-sm:text-5xl max-sm:font-mainFont max-sm:font-black max-sm:text-dark max-sm:mt-10">
        ¿Necesitas<br/> hablar?
      </p>
  </div>

    {/* div 2 */}
  <div className="flex max-sm:ml-6">
      <p className="max-sm:text-2xl max-sm:font-mainFont max-sm:font-black max-sm:text-medium max-sm:mt-1">Estamos para<br/> ayudarte</p>      
  </div>

    {/* div 3 */}
  <div className="flex max-sm:bg-light max-sm:justify-center">
      <p className="font-mainFont  max-sm:text-2xl max-sm:mr-8 max-sm:font-medium max-sm:ml-6 max-sm:text-left max-sm:text-prettyleading-relaxed text-dark max-w-md max-sm:mt-6 ">
        Somos una organización sin fines de lucro dedicada a la protección del alma, centrada en la prevención del suicidio y el apoyo a personas en situación de depresión.
        Creemos en ser una armadura emocional, creando un refugio seguro donde cada persona se sienta escuchada, apoyada y protegida.
        <br/><br/>
        Juntos, cuidamos las alma vulnerables y construimos una comunidad más fuerte y solidaria.
      </p>
  </div>

    {/* div 4 */}
  <div className="flex max-sm:bg-light justify-center ">
      <img className="max-sm:w-96 max-sm:ml-6 max-sm:mr-6 max-sm:h-64 max-sm:rounded-3xl  max-sm:mt-6" src={imgHome} alt="" />
  </div>

    {/* div 5 ( Button Component )*/}
  <div className="flex justify-center max-sm:bg-light">
      <HelpButton className="max-sm:w-96" />
  </div>
  
</div>
  {/* End of div container */}

  </>

  )
}

export default Home