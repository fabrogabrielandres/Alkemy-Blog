import React from 'react';
import {
  Flex, Heading, Text, Image,
  Modal, ModalOverlay, ModalContent,
  ModalBody, ModalCloseButton, Button,
  useDisclosure
} from '@chakra-ui/react';
import ImageLazy from '../../LazyLoad';

export const News = ({ name, content, image }) => {

  // Manejo del Modal
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      flexDirection='column'
      alignItems='center'>
      <Heading as="h2" size="xl" mb={9}>
        {name}
      </Heading>

      <Text fontSize="xl" w={['90%', '80%', '70%']} my={6} minH='30vh'>
        {content.replace('<p>', '').replace('</p>', '')}
      </Text>

      <Button onClick={onOpen} bg='green.400'>Ver imagen</Button>
      <Modal isOpen={isOpen} onClose={onClose} size='lg' mx={3} scrollBehavior='outside'>
        <ModalOverlay />
        <ModalContent p={['6', '9', '12']}>
          <ModalCloseButton />
          <ModalBody>
            <ImageLazy src={image} alt={`picture-${name}`} boxSize='fit-content' />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}