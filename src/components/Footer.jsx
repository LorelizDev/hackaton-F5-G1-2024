import React from 'react'

import Logo from '../assets/images/resources/LogoSafeSoul.png'
import Linkedin from '../assets/images/resources/linkedin-icon.svg'
import Instagram from '../assets/images/resources/instagram-icon.svg'

const Footer = () => {
  return (
    <>
<footer className="flex lg:h-24 lg:justify-between lg:items-center  p-4 bg-[#375172] max-sm:h-72 ">
  <div className="flex lg:items-center lg:space-x-4">
    <img src={Logo} alt="LogoSafeSoul.png" className="lg:h-12 lg:ml-4 max-sm:h-10 max-sm:w-10" />
    <div>
      <p className="lg:text-xl lg:ml-8 max-sm:text-base max-sm:-ml-6 max-sm:mt-44 max-sm:text-nowrap  font-mainFont text-light ">© 2024 SafeSoul.  Todos los derechos reservados.</p>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row lg:items-center max  ">
    <a href="mailto:info@safesoul.es?subject=" className="text-light  lg:text-xl underline">
      info@safesoul.es
    </a>
    <a href="tel:+34647000933" className="flex text-light lg:text-xl lg:ml-16">+34 647000933</a>
  </div>

  <div className="flex lg:mr-6 max-sm:-96">
    <a href="https://www.linkedin.com">
      <img src={Linkedin} alt="icon-linkedin" className="lg:h-7 lg:mt-1 max-sm:h-96 " />
    </a>
    <a href="https://www.instagram.com/">
      <img src={Instagram} alt="icon-instagram" className="h-9" />
    </a>
  </div>
</footer>
  </>
  )
}

export default Footer