import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

/**
 * @param textStyle accepts all the style props that a Chakra Heading component does and
 * merges them with the built-in ones. Passed values overwrite default ones
*/
export const GenericTitle = ({
	text = 'Sin titulo',
	src = 'https://elgritodelsur.com.ar/wp-content/uploads/2019/09/IMG-20190912-WA0028.jpg',
	textStyles = {}
}) => {
	textStyles = {
		fontSize:'2.3rem',
		textShadow:'0px 3px 9px #333',
		color:'white',
		textTransform:'uppercase',
		textAlign:'center',
		...textStyles
	};
	return (
		<Flex
			h="40vh"
			w="100%"
			bgColor="transparent"
			bgImage={`linear-gradient(#3335, #3335), url(${src})`}
			bgRepeat="no-repeat"
			bgSize="100% 40vh"
			align="center"
			justify="center"
		>
			<Heading {...textStyles}>
				{text}
			</Heading>
		</Flex>
	);
};
