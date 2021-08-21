import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { mockupMessage } from './Mockups';

import { Box, Avatar, Container, Flex, Text } from '@chakra-ui/react';

const ExportMessage = ({ allMessage }) => {
	return (
		<>
			{
				allMessage.map((message) =>
					<Container key={message.id} justifyContent='center' my={10} mx='auto' p={5} border='1px' borderColor='gray.200' borderRadius='10px' boxShadow="base">
						<Flex align='center' mx={5} >
							<Avatar name={message.name} src={message.image} mr={5} alignItems='center' />
							<Text fontSize={24}>{message.username}</Text>
						</Flex>
						<Box fontSize={14} my={5} px={5} textAlign='justify'  ><>{ReactHtmlParser(message.message)}</></Box>
					</Container>
				)
			}
			{
				mockupMessage.map((message) =>
					<Container key={message.id} justifyContent='center' my={10} mx='auto' p={5} border='1px' borderColor='gray.200' borderRadius='10px' boxShadow="base">
						<Flex align='center' mx={5} >
							<Avatar name={message.name} src={message.image} mr={5} alignItems='center' />
							<Text fontSize={24}>{message.username}</Text>
						</Flex>
						<Text fontSize={14} my={5} px={5} textAlign='justify'>{message.message}</Text>
					</Container>
				)
			}
		</>
	);
};

export default ExportMessage;