import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carrousel from '../../Components/Carrousel';
import { Box } from '@chakra-ui/react';
import {ErrorAlert} from '../../Components/common/GenericAlert';
const Home = () => {
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);
	const [organization, setOrganization] = useState({});
	const baseURL = 'http://ongapi.alkemy.org/api';


	const getDataOrganization = async () => {
		try {
			setLoading(true);
			const resp = await axios.get(`${baseURL}/organization`);
			const dataOrganization = await resp.data.data;
			setOrganization(dataOrganization);
			setLoading(null);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	useEffect(() => {
		getDataOrganization();
	}, []);

	if (loading) return <Box>...loading </Box>;
	return !error ? (
		<>
			<Box textAlign="center" fontSize="48px" fontWeight="600">
				{organization.welcome_text}
			</Box>
			<Box w="100%" textAlign="center" mt="100px">
				<Carrousel />
			</Box>
		</>
	) : 
		<ErrorAlert title={'error'} description={'Problemas al cargar Titulo'}/>;
};

export default Home;
