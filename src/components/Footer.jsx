import React from 'react';
import Logo from '../assets/images/resources/LogoSafeSoul.png'; // Asegúrate de tener esta ruta correcta
import Linkedin from '../assets/images/resources/linkedin-icon.svg';
import Instagram from '../assets/images/resources/instagram-icon.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-[#375172] text-white">
      <div className="flex flex-col items-center mb-4">
        <img src={Logo} alt="Logo SafeSoul" className="h-10 mb-2" /> {/* Logo */}
        <p className="text-center">© 2024 SafeSoul. Todos los derechos reservados.</p>
      </div>
      <div className="flex flex-col items-center mb-4">
        <a href="mailto:info@safesoul.es?subject=" className="underline">info@safesoul.es</a>
        <a href="tel:+34647000933" className="underline">+34 647000933</a>
      </div>
      <div className="flex space-x-4"> {/* Espaciado entre íconos */}
        <a href="https://www.linkedin.com">
          <img src={Linkedin} alt="LinkedIn" className="h-6" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" className="h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
