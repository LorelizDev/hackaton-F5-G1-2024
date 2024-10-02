import axios from "axios";

export const url = '';


/* function getToken(){
  let token = localStorage.getItem('token');
  const headers ={
    'Authorization': `Bearer ${token}`
  };
  return headers
} */
//GET
 
export const getMessages = async () => {
  try {
    /* const headers = getToken() */
    const response = await axios.get(url/* , {headers} */);
    return response.data
  } catch (error) {
    console.error('error get news', error.message);
    throw error;
  }
};

//POST

export const postMessage= async (data/* , token */) => {
 
  try {
    /* const headers = getToken() */
     const response = await axios.post(url, data/* , {headers} */);
     alert("Message created successfully");
     return response;
  } catch (error) {
     console.error('Error creating new:', error.message);
     throw error; }
 };

//DELETE

export const deleteMessage = async (id_message) =>{
  try {
    /* const headers = getToken() */
    let urlId = `${url}/${id_message}`;
    const response = await axios.delete(urlId/* , {headers} */);
    alert("Message deleted successfully");
    return response;
  } catch (error) {
    console.error('error delete new', error.message);
    throw error;
  }

};

//UPDATE

export const updateMessage = async (data, id_message) => {
  try {
    /* const headers = getToken() */
    let urlId = 	`${url}/${id_message}`;
    const response = await axios.put(urlId, data/* , {headers} */);
    alert('Message updated');
    return response;
  } catch (error) {
    console.error('error update message', error.message);
    throw error;
  }
}
//Get by id

export const getMessageById = async (id) => {
  try {
    /* const headers = getToken() */
    const response = await axios.get(`${url}/${id}`/* , {headers} */);
    return response;
  } catch (error) {
    console.error('Error get new', error.message);
    throw error;
  }
};
