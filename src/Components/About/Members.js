<<<<<<< HEAD
import React, { useEffect } from 'react';
import facebookIcon from './icons/facebook-icon.png';
import linkedinIcon from './icons/linkedin-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { getUs } from '../../features/Us/usSlice';
=======
import React from "react";
import facebookIcon from "./icons/facebook-icon.png";
import linkedinIcon from "./icons/linkedin-icon.png";
>>>>>>> 88482920b12ff735da58af911ab10eff426b35b5

import {
	Table,
	Tr,
	Image,
	Flex,
	Box,
	Th,
	Container,
	Thead,
	Link,
} from '@chakra-ui/react';

<<<<<<< HEAD
const Members = () => {
	const dispatch = useDispatch();
	const { us } = useSelector((state) => state.us);

	useEffect(() => {
		dispatch(getUs());
	}, [dispatch]);
=======
const Members = ({us}) => {
 
>>>>>>> 88482920b12ff735da58af911ab10eff426b35b5

	return (
		<Container maxW="container.lg">
			{us.map((member, index) => (
				<Table variant="unstyled" key={index}>
					<Thead>
						<Tr>
							<Flex alignItems="center" flexWrap="wrap">
								<Th>
									<Image
										src={member.image}
										alt={member.name}
										boxSize="100px"
										objectFit="cover"
									/>
								</Th>

								{/* Name and description */}
								<Th>
									<Box width="150px">
										<strong>{member.name}</strong>
										<br></br>
										<strong>{member.description}</strong>
									</Box>
								</Th>
							</Flex>

							{/* Social media icons */}
							<Th>
								<Flex flexDirection="row">
									<Link href={member.facebookUrl} isExternal>
										<Image m={2} src={facebookIcon} />
									</Link>
									<Link href={member.linkedinUrl} isExternal>
										<Image m={2} src={linkedinIcon} />
									</Link>
								</Flex>
							</Th>
						</Tr>
					</Thead>
				</Table>
			))}
		</Container>
	);
};

export default Members;
