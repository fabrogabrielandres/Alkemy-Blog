import React from "react";
import { GenericTitle as ActivityTitle } from "../../common/GenericTitle";
import { Content } from './Content';

import { Box } from "@chakra-ui/react";

const testingContent = `
  <h3>Titulo de la actividad</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat.</p>
`

const Detail = ({ content }) => {
  return (
    <>
      <Box w="100%" p={4} color="white" mt="0" mb="20px">
        <ActivityTitle text="Title pasado por props" />
      </Box>
      <Box w="100%" p={4} color="black" mt="0" mb="20px" fontSize="3rem">
        {content}
      </Box>
      <Content content={testingContent} />
    </>
  );
};

export default Detail;
