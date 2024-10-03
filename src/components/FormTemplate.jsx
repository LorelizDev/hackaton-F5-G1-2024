import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const FormTemplate = ({ title, fields, onSubmit, submitText, initialValues = {} }) => {
	const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
		defaultValues: initialValues,
	});

	watch("survey");
	const navigate = useNavigate();

	const handleFormSubmit = async (data) => {
		if (data.password !== data.confirmPassword) {
			alert('Las contraseñas no coinciden');
			return;
		  }
	
		// Excluir confirmPassword y survey antes de enviar los datos
		const { confirmPassword, survey, ...userData } = data;
		console.log(userData);
		await onSubmit(userData); // Lógica que se pasa desde el componente padre
		if (survey === "sí") {
			navigate("/");
		  } else {
			navigate("/login");
		  }
		reset();
	};

	return (
		<div className="m-auto w-4/5 bg-dark text-light p-4 rounded-lg sm:w-1/2">
			<h2 className="text-center text-xl font-medium mb-4">{title}</h2>
			<form
				onSubmit={handleSubmit(handleFormSubmit)}
				className="flex flex-col items-center w-4/5 mx-auto my-4 bg-dark text-light">
				{fields.map(({ name, type, placeholder, validation }, index) => (
					<div key={index} className="mb-3 w-full">
						{type === "radio" ? (
							<>
								<p className="mb-2 text-center">¿Quieres responder a una breve encuesta?</p>
								<div className="flex justify-center w-full">
									<div className="inline-flex items-center mr-4">
										<input
											id={`${name}-yes`}
											name={name}
											type="radio"
											value="sí"
											className="mr-2"
											{...register(name, validation)}
										/>
										<label htmlFor={`${name}-yes`} className="text-sm">Sí</label>
									</div>
									<div className="inline-flex items-center ml-4">
										<input
											id={`${name}-no`}
											name={name}
											type="radio"
											value="no"
											className="mr-2"
											{...register(name, validation)}
										/>
										<label htmlFor={`${name}-no`} className="text-sm">No</label>
									</div>
								</div>
							</>
						) : (
							<>
								<input
									id={name}
									type={type}
									placeholder={placeholder}
									{...register(name, validation)}
									className="w-full border-2 border-contrast p-2 rounded-3xl bg-transparent text-sm"
								/>
							</>
						)}
						
						{errors[name] && <span className="text-red-500 text-center">{errors[name].message}</span>}
					</div>
				))}
					<p className="  text-light font-bold p-2 rounded-3xl hover:bg-opacity-70">¿Ya tienes cuenta? <a href="./login">Inicia sesión</a> </p>
				<button type="submit" className="w-full mt-4 bg-medium text-light font-bold p-2 rounded-3xl hover:bg-opacity-70">
					{submitText}
				</button>
				<Link to="/login" className="mt-5 text-sm hover:font-semibold">¿Ya tienes una cuenta? Inicia sesión</Link>
			</form>
		</div>
	);
};

export default FormTemplate;