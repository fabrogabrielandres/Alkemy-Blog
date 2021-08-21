import { GET, POST, PUT, DELETE } from './privateApiService';
import { publicApiGet } from './publicApiService';
export const URL = 'http://ongapi.alkemy.org/api/members';

//Private services

export const getPrivateMembers = async (id = null) => {
	return await GET(URL, id);
};

export const postPrivateMembers = async (data) => {
	return await POST(URL, data);
};

export const putPrivateMembers = async (id, data) => {
	return await PUT(URL, id, data);
};

export const deletePrivateMembers = async (id) => {
	return await DELETE(URL, id);
};

//Public Services

export const getPublicMembers = async (id = null) => {
	return await publicApiGet(URL, id);
};