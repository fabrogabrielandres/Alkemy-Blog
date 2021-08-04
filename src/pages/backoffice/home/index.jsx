import React from 'react';
import Slides from './slides'
import TextBackofficeHome from './text';



import {
  Box
} from '@chakra-ui/react';

export const Home = () => {

  return (
    <>
      <TextBackofficeHome />
      <Box>
        <Slides />
      </Box>
    </>
  );
}

