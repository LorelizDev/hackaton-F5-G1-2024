import React, { useState, useRef, useEffect } from 'react';
import LogOutButton from "../components/LogOutButton";
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { userAuth } = useUserContext();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null); // 

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className="flex justify-end relative z-10">
        <button onClick={toggleMenu} className="flex p-2 text-dark focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {open && (
          <div ref={menuRef} className="top-5 max-sm:w-screen max-sm:h-screen absolute right-0 mt-2 w-96 bg-light rounded-lg ">
            
            <ul className="flex flex-col p-2">
              {
                !userAuth && <li className="py-2 px-4 hover:bg-gray-200 font-mainFont font-black text-3xl text-dark"><a href="/login">Iniciar sesión</a></li>
              }
              {
                !userAuth && <li className="px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl"><a href="/register">Registro</a></li>
              }
              <li className="px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl"><a href="/saviours">Quiero ser Savior</a></li>
              <li className="px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl"><a href="/community">Comunidad</a></li>
              <li className="py-2 px-4 hover:bg-gray-200 font-mainFont font-black text-3xl text-dark"><a href="/resources">Recursos</a></li>
              <li className=" px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl">Talleres</li>
              <li className=" px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl">Noticias</li>
              <li className="py-2 px-4 hover:bg-gray-200 font-mainFont font-black text-3xl text-dark">Contacto</li>
              <li className=" px-4 hover:bg-gray-200 font-mainFont font-bold text-medium text-2xl">Chat</li>
              {userAuth && <LogOutButton />}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
