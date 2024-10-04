import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Survey = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleSurveySubmit = async (data) => {
    try {
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const options = ["No me siento triste.", "Me siento triste gran parte del tiempo.", "Me siento triste todo el tiempo.", "Me siento tan triste o soy tan infeliz que no puedo soportarlo."]

  return (
    <div className='mb-10'>
        <div className='w-5/6 mx-auto py-8'>
            <h2 className='font-extrabold text-4xl text-dark '>Encuesta de salud</h2>
            <p className='font-semibold text-2xl text-medium mt-6'>¿En qué medida te has sentido identificado con las siguientes situaciones en las últimas dos semanas?</p>
        </div>
        <form className="m-auto w-4/5 bg-dark px-4 py-8 rounded-lg sm:w-1/2" onSubmit={handleSubmit(handleSurveySubmit)}>
          <p className=' text-light text-xl font-semibold'>Tristeza</p>
          <div className='my-4'>
            {options.map((option, index) => (
              <div key={index} className="w-full border-2 border-contrast my-4 p-2 rounded-3xl bg-white text-sm">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="tristeza"
                  value={option}
                  {...register("tristeza", { required: "Debes seleccionar una opción" })}
                  className="mr-2"
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>
          {errors.tristeza && <span className="text-red-500 text-center">{errors.tristeza.message}</span>}
          <button type="submit" className="w-full mt-4 bg-medium text-light font-bold p-2 rounded-3xl hover:bg-opacity-70">
            Siguiente
          </button>
        </form>
    </div>
  )
}

export default Survey
