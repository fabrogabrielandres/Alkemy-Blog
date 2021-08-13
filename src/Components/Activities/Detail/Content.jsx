import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Flex } from '@chakra-ui/react';

export const Content = ({ content }) => {

  return (
    <Flex
      p={6}
      flexDirection="column"
      alignItems="center"
      mx="auto"
      w={['90%', '80%', '70%']}
      fontSize="1.25rem">
      {
        ReactHtmlParser(content)
      }
    </Flex>
  )
}
