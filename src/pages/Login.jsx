import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext.jsx';
import { useForm } from 'react-hook-form';
import { loginUser } from '../services/userServices.js';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { setUserAuth } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (formData) => {
    try {
      setIsLoading(true);
      setLoginError();
      const response = await loginUser(formData);
      if (response) {
        setUserAuth(true);
        navigate('/');
      }

    } catch (error) {
      setLoginError(error.response.data.error);
      setIsLoading(false);
    }
  };

  return (
    <div className='formulary_section my-12'>
      <div className="m-auto w-4/5 text-dark p-4 rounded-lg sm:w-1/2">
        <h1 className="text-4xl text-center font-semibold text-medium mb-10">Inicia sesión</h1>
        <form className="w-[280px] mx-auto my-4 text-dark flex flex-col gap-3 justify-center items-center" onSubmit={handleSubmit(handleLogin)}>

          <input disabled={isLoading} {...register("username", { required: true })} type="username" id="username" placeholder="Nombre de usuario" required className="w-full border-2 border-dark px-2 py-1 rounded-3xl bg-transparent text-sm" />

          <div className="relative w-full">
            <input disabled={isLoading} {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} id="password" placeholder="Contraseña" required className="w-full border-2 border-dark px-2 py-1 rounded-3xl bg-transparent text-sm" />
            <button type="button" id="togglePassword" className="text-dark absolute text-sm right-0 my-[6px] mx-3" onClick={togglePasswordVisibility}>
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>

          <button type="submit" className="w-1/2 mt-4 bg-contrast text-dark font-semibold p-2 rounded-3xl hover:bg-opacity-70">
            Entrar
          </button>
          {isLoading &&
            <div role="status" className='flex flex-col place-items-center w-full'>
              <svg aria-hidden="true" className="w-8 h-8 text-dark animate-spin dark:text-dark fill-contrast" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </div>
          }
          {loginError && <p className='text-red-500 self-center'>Datos incorrectos</p>}
          <div className='flex flex-col items-center mt-5'>
            <Link to="" className='hover:font-semibold font-medium text-sm text-dark'>¿Has olvidado tu contraseña?</Link>
            <Link to="/register" className='hover:font-semibold font-medium text-base text-medium'>Crear cuenta</Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;