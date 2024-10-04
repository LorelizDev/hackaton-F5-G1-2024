import axios from "axios";

export const url = 'http://localhost:8000/';

export const loginUser = async (data) => {
    console.log('Cuerpo de la solicitud:', data);
    try {
        const res = await axios.post(`${url}login`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error en login:', error.response.data); // Muestra el error devuelto por el servidor
        console.error('Detalles del error:', error.response.statusText);
        console.error('Error en login:', error.message);
        throw error;
    }
};

export const registerUser = async (data) => {
    try {
        const res = await axios.post(`${url}users`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error al registrar usuario:', error.message);
        throw error;
    }
};
