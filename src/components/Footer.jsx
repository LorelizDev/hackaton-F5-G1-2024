import React from 'react'
import "./Footer.css"
import Logo from '../assets/images/resources/LogoSafeSoul.png'
import Linkedin from '../assets/images/resources/linkedin-icon.svg'
import Instagram from '../assets/images/resources/instagram-icon.svg'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-content">
  <img src={Logo} alt="LogoSafeSoul.png" className="h-8" />
  <div>© 2024 SafeSoul.Todos los derechos reservados.</div>
    <a href="mailto:info@safesoul.es?subject=" className="underline">info@safesoul.es</a>

    <a href="tel:+34647000933">+34 647000933</a>
   <div className="social"> 
    <a href="https://www.linkedin.com"> 
      <img src={Linkedin} alt="icon-linkedin" className="h-6" />
    </a>
    <a href="https://www.instagram.com/">
      <img src={Instagram} alt="icon-instagram" className="h-7" />
    </a>
    </div>
  </div>
</footer>
  )
}

export default Footer