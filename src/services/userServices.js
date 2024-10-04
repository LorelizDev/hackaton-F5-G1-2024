import axios from "axios";

export const url = 'http://localhost:8000/';

export const loginUser = async (data) => {
    console.log('Cuerpo de la solicitud:', data);
    try {
        const formData = new URLSearchParams();
        formData.append('username', data.email);  // OAuth2 usa 'username' aunque sea un email
        formData.append('password', data.password);

        const res = await axios.post(`${url}login/`, formData.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error en login:', error.response?.data);
        console.error('Detalles del error:', error.response?.statusText);
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
