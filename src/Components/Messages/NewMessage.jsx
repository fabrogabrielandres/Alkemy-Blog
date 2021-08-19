import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Box, Button, Container, FormLabel, Input, SimpleGrid, Text } from '@chakra-ui/react';

const newMessageSchema = Yup.object().shape({
  id: Yup.string(),
  username: Yup.string().required('Este campo es obligatorio'),
  message: Yup.string().required('Este campo es obligatorio'),
  image: Yup.mixed()
    .required("A file is required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    )
})

const NewMessage = ({ saveInLocal }) => {

  const sendNewMessage = async (values) => {
    const message = await values;
    saveInLocal(message);

  }

  const convertirABase64 = (image) => {
    return new Promise((res, req) => {
      let reader = new FileReader();
      reader.readAsDataURL(image)
      reader.onload = () => {
        res(reader.result)
      }
    })
  }

  return (
    <Box>
      <Formik
        initialValues={{
          id: uuidv4(),
          username: '',
          message: '',
          image: ''
        }}
        validationSchema={newMessageSchema}
        validateOnSubmit
        onSubmit={async (values) => {
          console.log(values)
          const img = values.image;
          const imgbase = await convertirABase64(img);
          values.image = imgbase;
          sendNewMessage(values)
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Container centerContent >
              <SimpleGrid columns={1} spacingX="40px" spacingY="20px" my="30px" >
                <FormLabel>Nombre</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Ingrese el nombre"
                  name='username'
                  value={values.name}
                  onChange={handleChange('username')}
                />
                {errors.username && console.log(errors.username)}
                <FormLabel>Imagen</FormLabel>
                <Field name="image" >
                  {({ field, form }) => (
                    <>
                      <Input variant="flushed" name="image" type="file" onChange={async (event) => {
                        form.setFieldValue(field.name, event.target.files[0])
                      }}
                      />
                      {<ErrorMessage name="image">{message => <Text>{message}</Text>}</ErrorMessage>}
                    </>
                  )}
                </Field>
                {errors.image && console.log(errors.image)}
                <FormLabel>Mensaje</FormLabel>
                <Field name="message">
                  {({ field, form }) => (
                    <>
                      <CKEditor
                        editor={ClassicEditor}
                        data={field.value}
                        onChange={(event, editor) => {
                          form.setFieldValue(field.name, editor.getData());
                        }}
                      />
                    </>
                  )}
                </Field>
                <Button type="submit">Comentar</Button>
              </SimpleGrid>
            </Container>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default NewMessage;