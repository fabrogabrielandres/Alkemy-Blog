import React from 'react';
import Slides from '../../../Components/Backoffice/Home/slides';
import TextBackofficeHome from '../../../Components/Backoffice/Home/text';
//import HeaderComponent from "../../../Components/Header";

import { Box } from '@chakra-ui/react';

export const HomeBackoffice = () => {
	return (
		<>
			{/*<HeaderComponent />*/}
			<TextBackofficeHome />
			<Box>
				<Slides />
			</Box>
		</>
	);
};
