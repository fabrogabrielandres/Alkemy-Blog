import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from 'axios';

import {
  Container,
  SimpleGrid,
  Input,
  Button,
  FormLabel,
} from '@chakra-ui/react';

const EditSchema = Yup.object().shape({
  name: Yup.string().required('Este campo es obligatorio'),
  //logo: Yup.string().required('Este campo es obligatorio').matches(/([a-zA-Z0-9\s_\\.\-():])+(.png|.jpg)$/),
  short_description: Yup.string().required('Este campo es obligatorio'),
  long_description: Yup.string().required('Este campo es obligatorio'),
  welcome_text: Yup.string().min(20, 'Debe tener un minimo de 20 caracteres').required('Este campo es obligatorio'),
  facebook_url: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
  linkedin_url: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
  twitter_url: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
  instagram_url: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
})

const FormEditData = () => {

  const baseURL = 'http://ongapi.alkemy.org/api';

  const convertirABase64 = (image) => {
    return new Promise((res, req) => {
      let reader = new FileReader();
      reader.readAsDataURL(image)
      reader.onload = () => {
        res(reader.result)
      }
    })
  }

  const sendValues = async (values) => {
    try {
      const sendData = await axios.post(`${baseURL}/organization`, values)
      console.log(sendData);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          logo: '',
          short_description: '',
          long_description: '',
          welcome_text: '',
          adress: '',
          phone: '',
          cellphone: '',
          created_at: new Date(),
          updated_at: new Date(),
          facebook_url: '',
          linkedin_url: '',
          instagram_url: '',
          twitter_url: ''
        }}
        validationSchema={EditSchema}
        validateOnSubmit
        onSubmit={async (values) => {
          console.log(values)
          const img = values.logo;
          const imgbase = await convertirABase64(img);
          values.logo = imgbase;
          sendValues(values)
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Container centerContent >
              <SimpleGrid columns={1} spacingX="40px" spacingY="20px" my="100px" >
                <FormLabel>Nombre</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Ingrese el nombre"
                  name='name'
                  value={values.name}
                  onChange={handleChange('name')}
                />
                {errors.name && console.log(errors.name)}
                <FormLabel>Imagen</FormLabel>
                <Field name="logo" >
                  {({ field, form }) => (
                    <>
                      <Input variant="flushed" name="logo" type="file" onChange={async (event) => {
                        form.setFieldValue(field.name, event.target.files[0])
                      }}
                      />
                      {/* <ErrorMessage name="logo">{message => <Text>{message}</Text>}</ErrorMessage> */}
                    </>
                  )}
                </Field>
                {errors.logo && console.log(errors.log)}
                <FormLabel>Descripción corta</FormLabel>
                <Field name="short_description">
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

                {errors.short_description && console.log(errors.short_description)}
                <FormLabel>Descripción Larga</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue una descripción completa"
                  name='long_description'
                  value={values.long_description}
                  onChange={handleChange('long_description')}
                />
                {errors.long_description && console.log(errors.long_description)}
                <FormLabel>Texto de Bienvenida</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue un texto de bienvenida"
                  name='welcome_text'
                  value={values.welcome_text}
                  onChange={handleChange('welcome_text')}
                />
                {errors.welcome_text && console.log(errors.welcome_text)}
                <FormLabel>Dirección</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Dirección"
                  name='adress'
                  value={values.adress}
                  onChange={handleChange('adress')}
                />
                {errors.adress && console.log(errors.adress)}
                <FormLabel>Teléfono</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Teléfono"
                  name='phone'
                  value={values.phone}
                  onChange={handleChange('phone')}
                />
                {errors.phone && console.log(errors.phone)}
                <FormLabel>Teléfono Celular</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Teléfono Celular"
                  name='cellphone'
                  value={values.cellphone}
                  onChange={handleChange('cellphone')}
                />
                {errors.cellphone && console.log(errors.cellphone)}
                <FormLabel>Url Facebook</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='facebook_url'
                  value={values.facebook_url}
                  onChange={handleChange('facebook_url')}
                />
                {errors.facebook_url && console.log(errors.facebook_url)}
                <FormLabel>Url Linkedin</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='linkedin_url'
                  value={values.linkedin_url}
                  onChange={handleChange('linkedin_url')}
                />
                {errors.linkedin_url && console.log(errors.linkedin_url)}
                <FormLabel>Url Instagram</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='instagram_url'
                  value={values.instagram_url}
                  onChange={handleChange('instagram_url')}
                />
                {errors.instagram_url && console.log(errors.instagram_url)}
                <FormLabel>Url Twitter</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='twitter_url'
                  value={values.twitter_url}
                  onChange={handleChange('twitter_url')}
                />
                {errors.twitter_url && console.log(errors.twitter_url)}

                <Button type='submit'>Guardar</Button>
              </SimpleGrid>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormEditData;
