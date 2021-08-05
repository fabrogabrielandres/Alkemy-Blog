import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import axios from 'axios';

import {
  Box, Button, Textarea
} from '@chakra-ui/react';

const textSchema = Yup.object().shape({
  welcome_text: Yup.string().min(20, 'El campo debe tener como minimo 20 caracteres').required('Este campo es obligatorio')
});


const FormEditText = ({ content, setOpenTextArea, getOrganizationData }) => {

  const baseURL = 'http://ongapi.alkemy.org/api';

  const saveChanges = async (values) => {
    console.log(values)
    try {
      const sendData = await axios.post(`${baseURL}/organization`, values)
      console.log(sendData);
    } catch (error) {
      console.log(error)
    }
    setOpenTextArea(false);
    getOrganizationData();
  }

  return (
    <Box w='100%'>
      <Formik
        initialValues={{
          name: content.name,
          short_description: content.short_description,
          long_description: content.long_description,
          welcome_text: '',
          adress: content.adress,
          phone: content.phone,
          cellphone: content.cellphone,
          created_at: content.created_at,
          updated_at: new Date(),
          facebook_url: content.facebook_url,
          linkedin_url: content.linkedin_url,
          instagram_url: content.instagram_url,
          twitter_url: content.twitter_url
        }}
        validationSchema={textSchema}
        validateOnSubmit
        onSubmit={(e, values) => saveChanges(e, values)}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form>
            {console.log(values)}
            <Textarea
              isfullwidth='true'
              as='textarea'
              name="welcome_text"
              placeholder={content.welcome_text}
              values={values.welcome_text}
              onChange={handleChange('welcome_text')}
            />
            {/*errors.text && console.log(errors.text) */}
            <Button type='submit'>Guardar</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormEditText;