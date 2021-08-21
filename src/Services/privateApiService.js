/* eslint-disable no-mixed-spaces-and-tabs */
import { axiosInstance } from './axiosInstance';
// Function que construye la URL.
const getURL = (URL, id) => {
	return `${URL}${id !== null ? '/' + String(id) : ''}`;
};
// Function que realiza la peticion GET
export const GET = async (URL, id = null) => {
	try {
		const response = await axiosInstance.get(getURL(URL, id));
		return response;
	} catch (error) {
		return error.response;
	}
};

// Function que realiza la peticion POST, data es el objeto a enviar en el BODY del request
export const POST = async (URL, data) => {
	try {
		const response = await axiosInstance.post(URL, data);
		return response;
	} catch (error) {
		return {
			msg: 'Error al realizar la peticion POST',
			error,
		};
	}
};

// Function que realiza la peticion PUT. Recibe data que es el objeto a enviar en el BODY del request.
export const PUT = async (URL, id = null, data) => {
	try {
		const response = await axiosInstance.put(getURL(URL, id), data);
		return response;
	} catch (error) {
		return {
			msg:
        id === null
        	? 'Debe proporcionar un ID valido'
        	: 'Error al realizar la peticion PUT',
			error,
		};
	}
};

// Function que realiza la peticion DELETE
export const DELETE = async (URL, id) => {
	try {
		if (id === null) {
			throw new Error(
				`Debe proporcionar un ID valido, ${id} no es un valor admitido.`
			);
		}
		const response = await axiosInstance.delete(getURL(URL, id));
		return response;
	} catch (error) {
		return {
			msg: 'Error al realizar la peticion DELETE',
			error,
		};
	}
};
export const PATCH = async (URL, id = null, datosActualizacion) => {
	try {
		if (id === null || id === undefined) {
			throw new Error(
				`Debe proporcionar un ID valido, ${id} no es un valor admitido.`
			);
		}
		const response = await axiosInstance.patch(
			getURL(URL, id),
			datosActualizacion
		);
		return response;
	} catch (error) {
		return {
			msg: 'Error al realizar la peticion Patch',
			error,
		};
	}
};
