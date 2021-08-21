import axios from 'axios';
/**
 * Simple axios request to:
 * @param endpoint string url path
 * stateSetterCallback function that will be passed de response data obj
 *
 * @returns Promise
 */
export async function requestDataCall(endpoint, stateSetterCallback) {
	try {
		const response = await axios.get(endpoint);
		stateSetterCallback(response.data);
	} catch (error) {
		console.log(error);
	}
}
