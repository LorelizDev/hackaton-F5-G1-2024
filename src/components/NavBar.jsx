// import { useState } from 'react';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-gray-800 p-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//             <div className="text-white text-lg font-bold">Mi Menú</div>
            
//             {/* Burguer Button */}
//             <div className="lg:hidden">
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-white focus:outline-none"
//             >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 </svg>
//             </button>
//             </div>

//             {/* DESKTOP MENU */}
//             <div className="hidden lg:flex space-x-8">
//             <a href="#" className="text-white">Iniciar sesión</a>
//             <a href="#" className="text-white">Registro</a>
//             <div className="relative group">
//                 <a href="#" className="text-white">Recursos</a>
//                 <div className="absolute left-0 mt-2 w-48 bg-gray-800 hidden group-hover:block">
//                 <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Talleres</a>
//                 <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Comunidad</a>
//                 <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Noticias</a>
//                 </div>
//             </div>
//             <a href="#" className="text-white">Foros</a>
//             <a href="#" className="text-white">Contacto</a>
//             </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
//             <a href="#" className="block text-white py-2">Iniciar sesión</a>
//             <a href="#" className="block text-white py-2">Registro</a>
//             <a href="#" className="block text-white py-2">Foros</a>
//             <div className="relative">
//             <a href="#" className="block text-white py-2">Recursos</a>
//             <div className="pl-4">
//                 <a href="#" className="block text-white py-2">Talleres</a>
//                 <a href="#" className="block text-white py-2">Comunidad</a>
//                 <a href="#" className="block text-white py-2">Noticias</a>
//             </div>
//             </div>
//             <a href="#" className="block text-white py-2">Contacto</a>
//         </div>
//         </nav>
//     );
// };

// export default NavBar;
