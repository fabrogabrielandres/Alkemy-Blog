/* eslint-disable no-undef */
import { GET, POST } from './privateApiService';
const ORGANIZATION_ENDPOINT = process.env.REACT_APP_ENDPOINT_ORGANIZATION;
const URL = 'http://ongapi.alkemy.org/api' + ORGANIZATION_ENDPOINT;

export const getOrganizationData = async () => {
	return await GET(URL);
};

// Recibe un objeto 'data' con la informacion a enviar.
export const postOrganizationData = async (data) => {
	return await POST(URL, data);
};
