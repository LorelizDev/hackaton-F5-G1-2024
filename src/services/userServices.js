import axios from "axios";


export const url = '';

export const login = async (data) => {
    try {
        const res = await axios.post(`${url}login`, data);
        return res;
    }  catch (error) {
        console.error('error:', error.message);
        throw error;
      }

};

export const register = async (data) => {
    try {
        const res = await axios.post(`${url}register`, data);
        return res;
    }  catch (error) {
        console.error(' error:', error.message);
        throw error;
      }

};