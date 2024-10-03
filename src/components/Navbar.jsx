import React, { useState, useRef } from 'react';
import LogOutButton from "../components/LogOutButton";
import { useUserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import HelpButton from './HelpButton';
import SoulSafe from '../assets/images/resources/soulsafeblanco.png';

const Navbar = () => {
  const { userAuth } = useUserContext();
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false); // Estado para el desplegable
  const menuRef = useRef(null); 

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <>
      <div className="hidden lg:flex justify-between items-center bg-[#6864AD] text-white p-4">
        <div className="flex items-center space-x-4">
          <HelpButton className="w-12 pl-4" />  
          {/* Mover el logo aquí y hacer que redirija al home */}
          <Link to="/">
            <img src={SoulSafe} alt="Logo SoulSafe" className="h-8" />
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link to="/saviours" className="hover:underline">Quiero ser Savior</Link>
          
          {/* Enlace de recursos que despliega los sub-enlaces */}
          <div className="relative">
            <button onClick={toggleResources} className="hover:underline text-contrast">
              Recursos
            </button>
            {resourcesOpen && (
              <div className="absolute bg-white text-black rounded shadow-md mt-2 z-10">
                <Link to="/forum" className="block px-4 py-2 hover:bg-gray-200">Comunidad</Link>
                <Link to="/courses" className="block px-4 py-2 hover:bg-gray-200">Talleres</Link>
                <Link to="/news" className="block px-4 py-2 hover:bg-gray-200">Noticias</Link>
              </div>
            )}
          </div>

          <Link to="/chat" className="hover:underline">ChatBot</Link>

          {userAuth && <LogOutButton />}

          {!userAuth && (
            <>
              <Link to="/login" className="hover:underline text-contrast">Iniciar sesión</Link>
              <Link to="/register" className="hover:underline">Registro</Link>
            </>
          )}
        </div>
      </div>

      <div className="flex lg:hidden justify-end relative z-10">
        <button onClick={toggleMenu} className="flex p-2 text-dark focus:outline-none z-20">
          {!open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
          )}
        </button>

        {open && (
          <div ref={menuRef} className="top-5 max-sm:w-screen max-sm:h-screen absolute right-0 mt-2 w-96 bg-light rounded-lg pr-4 ">
            <ul className="flex flex-col p-2">
              <li className="px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl"><Link to="/saviours" onClick={toggleMenu}>Quiero ser Savior</Link></li>
              <li className="py-2 px-4 hover:bg-gray-200 font-mainFont font-black text-3xl text-dark"><Link to="/resources" onClick={toggleMenu}>Recursos</Link></li>
              <li className="px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl"><Link to="/chat" onClick={toggleMenu}>ChatBot</Link></li>

              {userAuth && <LogOutButton />}

              {!userAuth && (
                <>
                  <li className="py-2 px-4 hover:bg-gray-200 font-mainFont font-black text-3xl text-dark"><Link to="/login" onClick={toggleMenu}>Iniciar sesión</Link></li>
                  <li className="px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl"><Link to="/register" onClick={toggleMenu}>Registro</Link></li>
                </>
              )}
            </ul>
            <div className="flex justify-center py-2">
              <button><img src={SoulSafe} alt="Logo SoulSafe" className="h-8" /></button> {/* Logo no visible en menú hamburguesa */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
