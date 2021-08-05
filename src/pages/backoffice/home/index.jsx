import React from 'react';
import Slides from '../../../Components/Backoffice/Home/slides'
import TextBackofficeHome from '../../../Components/Backoffice/Home/text'

import {
  Box
} from '@chakra-ui/react';

export const HomeBackoffice = () => {

  return (
    <>
      <TextBackofficeHome />
      <Box>
        <Slides />
      </Box>
    </>
  );
}

