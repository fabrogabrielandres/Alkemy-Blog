import React from 'react';
import { Container, Progress, Text } from '@chakra-ui/react';

export const ProgressBarUndefined = ({ color = 'green', size = 'lg' }) => {

	return (
		<Container alignContent='center'>
			<Text fontSize="xl">Cargando...</Text>
			<Progress
				hasStripe
				isIndeterminate
				size={size}
				isAnimated
				colorScheme={color}
			/>
		</Container>
	);
};