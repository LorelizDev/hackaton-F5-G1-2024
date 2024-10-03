import axios from "axios";
const url = 'http://localhost:3000/community';

//GET
export const getData = async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
    throw error;
  }
};

//POST
export const postData = async (data) => {
  try {
    const response = await axios.post(`${url}`, data);
    alert("Mensaje creado exitosamente");
    return response.data;
  } catch (error) {
    console.error('Error al crear el mensaje:', error);
    throw error;
  }
};

//DELETE
export const deleteData = async (id) => {
  try {
    if (confirm("¿Estás seguro que quieres eliminar este mensaje?") === true) {
      await axios.delete(`${url}/${id}`);
      return { message: 'Mensaje eliminado con éxito' };
    }
  } catch (error) {
    console.error('Error al eliminar el mensaje:', error);
    throw error;
  }
};

//UPDATE
export const updateData = async (id, newData) => {
  try {
    const response = await axios.put(`${url}/${id}`, newData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el mensaje:', error);
    throw error;
  }
};