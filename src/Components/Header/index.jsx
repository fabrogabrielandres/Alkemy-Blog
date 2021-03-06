import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import Header from './header';
import Sidebar from '../Sidebar';

export default function HeaderComponent() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

	return (
		<>
			<Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
			<Box ml={true}>
				<Header
					showSidebarButton={true}
					onShowSidebar={toggleSidebar}
					tittle="Somos Mas, La Cava!!!!!!!!!"
				/>
			</Box>
		</>
	);
}
