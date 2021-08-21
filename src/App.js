import React from 'react';
import './App.css';
import Router from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './app/theme';
import '@fontsource/raleway';
import '@fontsource/montserrat';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router />
		</ChakraProvider>
	);
}

export default App;
