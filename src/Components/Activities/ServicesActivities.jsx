import { DELETE, GET, POST, PUT } from '../../Services/privateApiService';

const urlBase = 'http://ongapi.alkemy.org/api/activities';

export const getActivities = async (id) => {
	const getData = await GET(urlBase, id);
	return getData;
};

export const createActivities = async (values) => {
	const postData = await POST(urlBase, values);
	return postData;
};

export const editActivities = async (id, values) => {
	const putData = await PUT(`${urlBase}/${id}`, values);
	return putData;
};

export const deleteActivities = async (id) => {
	const deleteData = await DELETE(urlBase, id);
	return deleteData;
};