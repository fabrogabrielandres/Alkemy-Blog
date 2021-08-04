import React, { useState } from 'react';
import Slides from '../backoffice/home/slides';
import Boton from '../../Components/Common/Button/Rounded';


import {
  Box,
} from '@chakra-ui/react';


const Home = () => {
  const [threeSlidesOk, setThreeSlidesOk] = useState(true)

  return (
    <>
      <h2>Welcome! </h2>
      <Box textAlign='center'>
        <h2>Acá va el contenido editado en el textarea</h2>
      </Box>
      <Box
        w='100%'
        borderY='2px'
        borderColor='black'
        textAlign='center'
      >
        <Slides setThreeSlidesOk={setThreeSlidesOk} />
        {threeSlidesOk && <Boton nameButton='add+' />}
      </Box>
    </>
  );
}

export default Home;