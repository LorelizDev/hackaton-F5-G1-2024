import { Link } from "react-router-dom";

const ErrorBoundary = () => {
    return (
      <>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">

            <img src="src\assets\images\resources\page-error-404.png" alt="" />
            <p className="mt-6 text-lg leading-7 text-dark text-center font-semibold">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
            <Link to="/"
                className="mt-8 rounded-lg bg-medium px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                  Volver al inicio
            </Link >
        </main>
      </>
    )
  }

  export default ErrorBoundary;