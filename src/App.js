import React from 'react';
import './App.css';
import Router from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router />
      </div>
    </ChakraProvider>
  );
}

export default App;
