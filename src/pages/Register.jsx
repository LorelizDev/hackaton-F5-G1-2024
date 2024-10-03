import React from 'react'
import { registerUser } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
import FormTemplate from '../components/FormTemplate';

const Register = () => {
  const fields = [
    { name: "username", type: "text",  placeholder: "Nombre de usuario", validation: { required: "Tu nombre de usuario es requerido" } },
    { name: "name", type: "text",  placeholder: "Nombre", validation: { required: "Tu nombre es requerido" } },
    { name: "lastname", type: "text",  placeholder: "Apellido", validation: { required: "Tu apellido es requerido" } },
    { name: "email", type: "email",  placeholder: "Correo electrónico", validation: { required: "Tu correo electrónico es requerido" } },
    { name: "phone", type: "text",  placeholder: "Teléfono", validation: { required: "Tu número de teléfono es requerido" } },
    { name: "gender", type: "text",  placeholder: "Género", validation: { required: "Tu género es requerido" } },
    { name: "profession", type: "text",  placeholder: "Profesión", validation: { required: "Tu profesión es requerida" } },
    { name: "password", type: "password",  placeholder: "Contraseña", validation: { required: "Tu contraseña es requerida" } },
    { name: "confirmPassword", type: "password",  placeholder: "Confirmar Contraseña", validation: { required: "Tu contraseña es requerida" } },
    { name: "¿Te gustaría responder una breve encuesta?", type: "radio", options: ["Sí", "No"], validation: { required: "Debes seleccionar una opción" } },
  ];

  const navigate = useNavigate();
  
  const onSubmit = async (data) =>{
    try {
          const response = await  registerUser(data);
        console.log(response)
       /* const {token, rol} = response.sesiondata;
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol); */
        alert('Usuario creado correctamente ')
        navigate('/login');
    } catch (error) {
        console.error(error)
    } 
} 

  return (
    <div className='formulary_section my-12'>
      <FormTemplate title="Crea una cuenta" fields={fields} onSubmit={onSubmit} submitText="Regístrate" />
    </div>
  )
}
export default Register