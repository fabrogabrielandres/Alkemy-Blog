import { GET, POST, PUT, DELETE } from './privateApiService';
import { publicApiPost } from './publicApiService';

//URL
const URL = 'http://ongapi.alkemy.org/api/users';

//Private services:

export const getPrivateUsers = async (id = null) => {
	return await GET(URL, id);
};

export const postPrivateUsers = async (data) => {
	return await POST(URL, data);
};

export const putPrivateUsers = async (id, data) => {
	return await PUT(URL, id, data);
};

export const deletePrivateUsers = async (id) => {
	return await DELETE(URL, id);
};

// Public services:

export const publicPostUsers = async (data) => {
	return await publicApiPost(URL, data);
};
