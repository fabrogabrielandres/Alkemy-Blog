import React from 'react';
import {
	Box,
	Text,
	Flex,
} from '@chakra-ui/react';

const ThanksComponent = () => {
	const text = 'Gracias por tu Colaboracion';
	return (
		<>
			<Flex
				w='50rem'
				minH='30rem'
				direction='column'
				bg='gray.100'
				p={12}
				rounded={6}
				boxShadow='lg'>
				<Box w="100%" p={4} color="black" mt='0' mb='20px' fontSize='3rem'>
					<Text>{text}</Text>
				</Box>
			</Flex>
		</>
	);
};

export default ThanksComponent;