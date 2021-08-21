import React, { useEffect } from 'react';
import {
	Flex, Text,
	Modal, ModalOverlay, ModalContent,
	ModalBody, ModalCloseButton, Button,
	useDisclosure
} from '@chakra-ui/react';
import ImageLazy from '../../LazyLoad';
import { GenericTitle } from '../../common/GenericTitle';
export const News = ({ name, content, image, setHeightBox }) => {

	// Manejo del Modal
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		setHeightBox(document.querySelector('#box').clientHeight);
	}, [setHeightBox]);


	return (
		<Flex flexDirection="column" alignItems="center">
			<GenericTitle text={name} />
			<Text fontSize="xl" w={['90%', '80%', '70%']} my={6} minH="30vh">
				{content.replace('<p>', '').replace('</p>', '')}
			</Text>
			<Button onClick={onOpen} bg="green.400" id='box'>
        Ver imagen
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size="lg"
				mx={3}
				scrollBehavior="outside"
			>
				<ModalOverlay />
				<ModalContent p={['6', '9', '12']}>
					<ModalCloseButton />
					<ModalBody>
						<ImageLazy
							src={image}
							alt={`picture-${name}`}
							boxSize="fit-content"
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Flex>
	);
};
