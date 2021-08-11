import { GET, POST, PUT, PATCH, DELETE } from './privateApiService';
const URL = 'http://ongapi.alkemy.org/api/slides';

// Puede recibir un id para buscar uno solo o no recibir y traer todos los contactos.
export const getSlides = async (id = null) => {
  return await GET(URL, id);
}

// Recibe un objeto 'data' con la informacion a enviar.
export const postSlides = async (data) => {
  return await POST(URL, data);
}

// Debe recibir un id y un objeto 'data' con la informacion a modificar.
export const putSlides = async (id, data) => {
  return await PUT(URL, id, data);
}

// Debe recibir un id y un objeto 'data' con la informacion a actualizar.
export const patchSlides = async (id, data) => {
  return await PATCH(URL, id, data);
}

// Debe recibir un id para borrar el elemento
export const deleteSlides = async (id) => {
  return await DELETE(URL, id);
}