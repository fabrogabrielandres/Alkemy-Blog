import React, { useState, useEffect } from "react";
import { GenericTitle as ActivityTitle } from "../../common/GenericTitle";
import { Content } from './Content';
import { getActivities } from '../ServicesActivities';
import { useParams } from 'react-router-dom';

import { Box } from "@chakra-ui/react";
import { useCallback } from "react";

const Detail = () => {

  const [values, setValues] = useState('')

  const { id } = useParams();


  const activitiesForID = useCallback(async (id) => {
    try {
      const res = await getActivities(id)
      setValues(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    activitiesForID(id)
  }, [activitiesForID, id])


  return (
    <>
      {console.log(values)}
      <Box w="100%" p={4} color="white" mt='0' mb='20px'>
        <ActivityTitle text={values.name} />
      </Box>
      <Box w="100%" p={4} color="black" mt='0' mb='20px' fontSize='3rem'>
        <Content content={values.description} />
      </Box>
    </>
  );
};

export default Detail;
