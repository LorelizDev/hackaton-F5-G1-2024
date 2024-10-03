import axios from "axios";


export const url = 'http://localhost:3000/';

export const loginUser = async (data) => {
    try {
        const res = await axios.post(`${url}login`, data);
        return res;
    }  catch (error) {
        console.error('error:', error.message);
        throw error;
      }

};

export const registerUser = async (data) => {
    try {
        const res = await axios.post(`${url}users`, data);
        return res;
    }  catch (error) {
        console.error(' error:', error.message);
        throw error;
      }

};

export const getAuthenticatedUser = async () => {
    try {
        const res = await axios.get(`${url}/users/me`);
        return res;
    } catch (error) {
        console.error('error:', error.message);
        throw error;
    }
};