import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Router from './router/Router';

function App() {
  return (

    <div className="App">

      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
