/* eslint-disable no-undef */
import { DELETE, GET, POST, PUT } from '../../Services/privateApiService';
const CATEGORIES_ENDPOINT = process.env.REACT_APP_ENDPOINT_CATEGORIES;

const urlBase = 'http://ongapi.alkemy.org/api' + CATEGORIES_ENDPOINT;

export const getCategories = async (id) => {
	const getData = await GET(urlBase, id);
	return getData;
};

export const createCategory = async (values) => {
	const postData = await POST(urlBase, values);
	return postData.data.data;
};

export const editCategory = async (id, values) => {
	const putData = await PUT(urlBase, id, values);
	return putData;
};

export const deleteCategory = async (id) => {
	const deleteData = await DELETE(urlBase, id);
	return deleteData;
};
