import axios from 'axios';

/*
const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}
*/

//Esta funcion realiza el armado de la url
const getURL = (URL, id) => {
    return `${URL}${id !== null ? '/' + String(id) : ''}`
  }

export const publicApiPost = async (URL, data) => {
    try {
      const response = await axios.post(getURL(URL, null), data);
      return response;
    } catch (error) {
      return {
        msg: 'Ha ocurrido un error al realizar la peticion',
        error
      }
    }}

export const publicApiGet = async (URL, id = null) => {
    try {
      const response = await axios.get(getURL(URL, id));
      return response;
    } catch (error) {
      return {
        msg: 'Ha ocurrido un error al realizar la peticion',
        error
      }
    }}