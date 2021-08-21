
import React, { useState } from 'react';
import axios from 'axios';

import {
	Text,
	Input,
	Progress
} from '@chakra-ui/react';

export const ProgressBarUpload = ({ url = 'https://jsonplaceholder.typicode.com/albums/1/photos', size = 'lg', color = 'orange' }) => {

	const [percentage, setPercentage] = useState(0);


	const handleChange = async (e) => {
		const file = await e.target.files[0];

		let percent = 0;
		let data = new FormData();

		data.append('files', file);

		const config = {
			onUploadProgress: (progressEvent) => {
				const { loaded, total } = progressEvent;
				percent = Math.floor((loaded * 100) / total);
				console.log(`${loaded}kb of ${total}kb | ${percent}%`);

				if (percent <= 100) {
					setPercentage(percent);
				}
			},
			headers: {
				// custom headers goes here
			}
		};

		const urlBasePrueba = { url };

		const postResponse = axios.post(`${urlBasePrueba}`, data, config).then( () => {
			setPercentage(percent);
			setTimeout(() => {
				setPercentage(0);
			}, 1000);
		}
		)
			.catch((error) => {
				console.error(error);
			});
		postResponse.then(() => {
			console.log('File uploaded successfully.');
		}
		);
	};

	return (
		<>
			<Input
				type='file'
				onChange={handleChange}
				size="sm"
			/>
			<Progress
				hasStripe
				value={percentage}
				isAnimated
				size={size}
				colorScheme={color}
			/>
			<Text mb="8px">{percentage}% </Text>
		</>
	);
};
