import React from 'react';
import Title from '../../Title/Title';

import {
  Box
} from '@chakra-ui/react';

const Detail = ({ content }) => {
  return (
    <>
      <Box w="100%" p={4} color="white" mt='0' mb='20px'>
        <Title titleText='Title pasado por props' />
      </Box>
      <Box w="100%" p={4} color="black" mt='0' mb='20px' fontSize='3rem'>
        {content}
      </Box>
    </>
  );
}

export default Detail;