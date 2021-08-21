import React from 'react';
import {
	chakra,
	Box,
	Image,
	Flex,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
import { cardDefault } from './cardDefault';

export const Card = ({ cardProps }) => {
	const { title, description, image } = cardProps;
	const { imageDefault } = cardDefault;



	return (
		<Flex
			bg={useColorModeValue('#F9FAFB', 'gray.600')}
			p={50}
			w="full"
			alignItems="center"
			justifyContent="center"
		>
			<Box
				mx="auto"
				rounded="lg"
				shadow="md"
				bg={useColorModeValue('white', 'gray.800')}
				maxW="2xl"
			>
				<Box p={6}>
					<Box>
						<Link
							display="block"
							color={useColorModeValue('gray.800', 'white')}
							fontWeight="bold"
							fontSize="2xl"
							mt={2}
							_hover={{ color: 'gray.600', textDecor: 'underline' }}
						>
							{title}
						</Link>
						<chakra.p
							mt={2}
							fontSize="sm"
							color={useColorModeValue('gray.600', 'gray.400')}
						>
							{description}
						</chakra.p>
						<Image
							roundedTop="lg"
							w="full"
							h={64}
							fit="cover"
							src={image ? image : imageDefault}
							alt="Imagen"
						/>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
};

export default Card;