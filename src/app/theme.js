import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
	fonts: {
		heading: 'Montserrat',
		body: 'Raleway',
		text: 'Raleway',
	},
	styles: {
		global: {
			body: {
				bg: 'gray.100',
			},
		},
	},
});
export default theme;
