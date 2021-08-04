import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import {
  Box, Button, Textarea
} from '@chakra-ui/react';

const textSchema = Yup.object().shape({
  text: Yup.string().min(20, 'El campo debe tener como minimo 20 caracteres').required('Este campo es obligatorio')
});


const FormEditText = ({ setContent, content, setOpenTextArea }) => {

  const saveChanges = (values) => {
    setContent(values.text);
    setOpenTextArea(false);
  }

  return (
    <Box w='100%'>
      <Formik
        initialValues={{
          text: ''
        }}
        validationSchema={textSchema}
        onSubmit={saveChanges}
      >
        {({ handleChange, values, errors }) => (
          <Form>
            <Textarea
              isfullwidth='true'
              as='textarea'
              name="text"
              placeholder={content}
              values={values.text}
              onChange={handleChange('text')}
            />
            {/*errors.text && console.log(errors.text) */}
            <Button type='submit' onSubmit={saveChanges}>Guardar</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default FormEditText;