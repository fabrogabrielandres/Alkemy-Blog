import React, { useState, useEffect } from 'react';
import { getOrganizationData } from '../../../../Services/organizationApiService';
import {
  Text,
  Button
} from '@chakra-ui/react';
import FormEditText from './FormEditText';

export const baseURL = 'http://ongapi.alkemy.org/api'

const TextBackofficeHome = () => {

  const [openTextArea, setOpenTextArea] = useState(false)
  const [content, setContent] = useState('');

  const getData = async () => {
    try {
      const getData = await getOrganizationData();
      const resData = await getData.data.data;
      setContent(resData);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const editTextArea = () => {
    setOpenTextArea(true);
  }

  return (
    <>
      <Text fontSize='xl' mx='50px' my='50px' >
        {content.welcome_text}
        {console.log(content)}
      </Text>
      <Button onClick={editTextArea}>Editar</Button>
      {openTextArea &&
        <FormEditText
          setContent={setContent}
          content={content}
          setOpenTextArea={setOpenTextArea}
          getOrganizationData={getOrganizationData}
        />}
    </>
  );
}

export default TextBackofficeHome;