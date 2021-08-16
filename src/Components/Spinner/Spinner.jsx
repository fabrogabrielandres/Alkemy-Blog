import React from 'react';
import { Box, Spinner as ChakraSpinner } from "@chakra-ui/react"

export const Spinner = () => {
  
  return (
    <Box mx="auto" w="fit-content" p={9}>
      <ChakraSpinner 
        h="7rem" 
        w="7rem" 
        thickness="20px" 
        speed="1s" 
        emptyColor="green.200" 
        color="blue.500" 
        size="xl" />
    </Box>
  )
}