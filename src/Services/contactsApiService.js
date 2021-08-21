import { GET, POST, PUT, PATCH, DELETE } from './privateApiService';
const URL = 'http://ongapi.alkemy.org/api/contacts';

// Puede recibir un id para buscar uno solo o no recibir y traer todos los contactos.
export const getContacts = async (id = null) => {
	return await GET(URL, id);
};

// Recibe un objeto 'data' con la informacion a enviar.
export const postContacts = async (data) => {
	return await POST(URL, data);
};

// Debe recibir un id y un objeto 'data' con la informacion a modificar.
export const putContacts = async (id, data) => {
	return await PUT(URL, id, data);
};

// Debe recibir un id y un objeto 'data' con la informacion a actualizar.
export const patchContacts = async (id, data) => {
	return await PATCH(URL, id, data);
};

// Debe recibir un id para borrar el elemento
export const deleteContacts = async (id) => {
	return await DELETE(URL, id);
};