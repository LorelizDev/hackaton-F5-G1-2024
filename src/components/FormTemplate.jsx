import { useForm } from "react-hook-form";

const FormTemplate = ({ title, fields, onSubmit, submitText, initialValues = {} }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		defaultValues: initialValues,
	});

	const handleFormSubmit = async (data) => {
		onSubmit(data); // Lógica que se pasa desde el componente padre
		reset();
	};

	return (
		<div className="m-auto w-4/5 bg-dark text-light p-4 rounded-lg sm:w-1/2">
            <h2 className="text-center text-xl font-medium mb-4">{title}</h2>
			<form
				onSubmit={handleSubmit(handleFormSubmit)}
				className="w-4/5 mx-auto my-4 bg-dark text-light">
				{fields.map(({ name, type, placeholder, validation }, index) => (
					<div key={index} className="mb-3">
						<input
							id={name}
							type={type}
                            placeholder={placeholder}
							{...register(name, validation)}
							className="w-full border-2 border-contrast p-2 rounded-3xl bg-transparent text-sm"
						/>
						{errors[name] && <span className="text-red-500" >{errors[name].message}</span>}
					</div>
				))}

				<button type="submit" className="w-full mt-4 bg-medium text-light font-bold p-2 rounded-3xl hover:bg-opacity-70">
					{submitText}
				</button>
			</form>
		</div>
	);
};

export default FormTemplate;
