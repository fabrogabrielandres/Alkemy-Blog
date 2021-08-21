import axios from 'axios';
export async function dataToBase64String({url, file}, callback, ...callbackargs) {
	let blob = file;
	if (url) {
		const response = await axios(url);
		blob = await response.blob(); 
		// response is opaque I can't properly work with the data
		// it'll left as a placeholder for validation purposes
	}
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	reader.onload = () => {
		const base64String = reader.result;
		callback( ...callbackargs, base64String);
	}; 
}
