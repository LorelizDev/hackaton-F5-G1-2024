import React from 'react';
import { registerUser } from '../services/userServices';
import FormTemplate from '../components/FormTemplate';

const Register = () => {
  const fields = [
    { name: "email", type: "email", placeholder: "Correo electrónico", validation: { required: "Tu correo electrónico es requerido" } },
    { name: "name", type: "text", placeholder: "Nombre", validation: { required: "Tu nombre es requerido" } },
    { name: "address", type: "text", placeholder: "Dirección", validation: { required: "Tu dirección es requerida" } },
    { name: "phone", type: "text", placeholder: "Teléfono", validation: { required: "Tu teléfono es requerido" } },
    { name: "profession", type: "text", placeholder: "Profesión", validation: { required: "Tu profesión es requerida" } },
    { name: "gender", type: "text", placeholder: "Género", validation: { required: "Tu género es requerido" } },
    { name: "age", type: "number", placeholder: "Edad", validation: { required: "Tu edad es requerida" } },
    { name: "password", type: "password", placeholder: "Contraseña", validation: { required: "Tu contraseña es requerida" } },
    { name: "confirmPassword", type: "password", placeholder: "Confirmar contraseña", validation: { required: "Debes confirmar tu contraseña" } },
    { name: "survey", type: "radio", options: ["Sí", "No"], validation: { required: "Debes seleccionar una opción" } },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      console.log(response);

      alert('Usuario creado correctamente');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al crear el usuario');
    }
  };

  return (
    <div className="formulary_section my-12">
      <FormTemplate title="Crea una cuenta" fields={fields} onSubmit={onSubmit} submitText="Regístrate" />
    </div>
  );
};

export default Register;
