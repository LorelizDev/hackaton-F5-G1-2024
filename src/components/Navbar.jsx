import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
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
<div className="flex max-sm:justify-end relative">
    <button onClick={toggleMenu} className="flex max-sm:p-2 max-sm:text-dark max-sm:focus:outline-none">
        <svg
            className="max-sm:w-6 max-sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        > 
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
    {open && (
        <div ref={menuRef} className="absolute max-sm:right-0 max-sm:mt-2 max-sm:w-96 max-sm:bg-light max-sm:rounded-lg ">
            <ul className="flex flex-col p-2">
                <li className="max-sm:py-2 max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-black max-sm:text-3xl max-sm:text-dark">Iniciar sesión</li>
                <li className="max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Registro</li>
                <li className="max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Quiero ser Savior</li>
                <li className="max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Foros</li>
                <li className="max-sm:py-2 max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-black max-sm:text-3xl max-sm:text-dark">Recursos</li>
                <li className=" max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Talleres</li>
                <li className="max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Comunidad</li>
                <li className=" max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Noticias</li>
                <li className="max-sm:py-2 max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-black max-sm:text-3xl max-sm:text-dark">Contacto</li>
                <li className=" max-sm:px-4 max-sm:hover:bg-gray-200 max-sm:font-mainFont max-sm:font-bold max-sm:text-medium max-sm:text-2xl">Chat</li>
            </ul>
        </div>
    )}
</div>
        </>
    );
};

export default Navbar;
