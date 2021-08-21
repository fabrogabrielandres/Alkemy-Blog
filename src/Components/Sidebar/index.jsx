import React from 'react';
import { useHistory } from 'react-router';
import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerContent,
	VStack,
} from '@chakra-ui/react';

const SidebarContent = ({ history }) => (
	<VStack>
		<Button onClick={() => history.push('/backoffice')} w="100%">
      Inicio
		</Button>
		<Button onClick={() => history.push('/backoffice/activities')} w="100%">
      Actividades
		</Button>
		<Button onClick={() => history.push('/backoffice/organization')} w="100%">
      Organizacion
		</Button>
		<Button onClick={() => history.push('/backoffice/slides')} w="100%">
      Slides
		</Button>
		<Button onClick={() => history.push('/backoffice/categories')} w="100%">
      Categorias
		</Button>
		<Button onClick={() => history.push('/backoffice/users')} w="100%">
      Usuarios
		</Button>
		<Button onClick={() => history.push('/backoffice/novedades')} w="100%">
      Novedades
		</Button>
		<Button onClick={() => history.push('/backoffice/members')} w="100%">
      Miembros
		</Button>
	</VStack>
);

const Sidebar = ({ isOpen, onClose }) => {
	const history = useHistory();
	return (
		<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Secciones</DrawerHeader>
					<DrawerBody>
						<SidebarContent history={history} />
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default Sidebar;
