import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NewsList from '../../Components/News/NewsList';
import Carrousel from '../../Components/Carrousel';

import {
  Box,
} from '@chakra-ui/react';

const Home = () => {
  const [organization, setOrganization] = useState({});

  const baseURL = 'http://ongapi.alkemy.org/api';

  const getDataOrganization = async () => {
    try {
      const resp = await axios.get(`${baseURL}/organization`);
      const dataOrganization = await resp.data.data
      setOrganization(dataOrganization);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataOrganization()
  }, [])

  return (
    <>
      <Box
        textAlign='center'
        fontSize='48px'
        fontWeight='600'
      >
        {organization.welcome_text}
      </Box>
      <Box
        w='100%'
        textAlign='center'
        mt='100px'
      >
        <Carrousel />
      </Box>
      <Box
        w='100%'
        textAlign='center'
        mt='100px'
      >
        <NewsList />
      </Box>
    </>
  );

}

export default Home;