import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import img from './imagen-min.jpg';


const Title = ({ titleText = 'This is your Title', titleImage = img }) => {
  return (
    <Box
      h="40vh"
      // bg="gray"
      bgImage={`url(${titleImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        bg="rgba(0 0 0 / 50%)"
      >
        <Text
          fontSize="2.3rem"
          color="white"
          textTransform="uppercase"
          textAlign="center"
        >
          {titleText}
        </Text>
      </Flex>
    </Box>
  );
};

export default Title;
