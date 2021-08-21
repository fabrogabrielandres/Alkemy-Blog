import React from 'react';

import {
	Box,
	Text
} from '@chakra-ui/react';

const AboutUs = ({ text }) => {
	return (
		<Box>
			<Text>
				<p>Sobre Nosotros:</p>
				<Text>{text}</Text>
			</Text>
		</Box>
	);
};

export default AboutUs;