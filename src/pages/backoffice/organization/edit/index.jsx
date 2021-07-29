import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  Container,
  SimpleGrid,
  Input,
  Button,
  FormLabel
} from '@chakra-ui/react';

const EditSchema = Yup.object().shape({
  name: Yup.string().required('Este campo es obligatorio'),
  logo: Yup.string().required('Este campo es obligatorio').matches(/([a-zA-Z0-9\s_\\.\-():])+(.png|.jpg)$/),
  shortDescription: Yup.string().required('Este campo es obligatorio'),
  longDescription: Yup.string().required('Este campo es obligatorio'),
  facebook: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
  twitter: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
  instagram: Yup.string().matches(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),
})

const FormEditData = () => {

  const sendValues = (values) => {
    console.log(values);
    /* 
    try{
      insert method here
    }catch ( error) {
      console.log(error)
    }
    */

  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          logo: '',
          shortDescription: '',
          longDescription: '',
          facebook: '',
          twitter: '',
          instagram: ''
        }}
        validationSchema={EditSchema}
        validateOnSubmit
        onSubmit={sendValues}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Container centerContent >
              <SimpleGrid columns={1} spacingX="40px" spacingY="20px" my="100px" >
                <FormLabel>Nombre</FormLabel>
                <Input
                  type='text'
                  placeholder="Ingrese el nombre"
                  name='name'
                  value={values.name}
                  onChange={handleChange('name')}
                />
                {console.log(values)}
                {/* errors.name && console.log(errors.name) */}
                <FormLabel>Imagen</FormLabel>
                <Input
                  type='file'
                  placeholder="logo"
                  name='logo'
                  value={values.logo}
                  onChange={handleChange('logo')}
                />
                {/* errors.logo && console.log(errors.logl) */}
                <FormLabel>Descripción corta</FormLabel>
                <Field name="shortDescription">
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

                {/* errors.shortDescription && console.log(errors.shortDescription) */}
                <FormLabel>Descripción Larga</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue una descripción completa"
                  name='longDescription'
                  value={values.longDescription}
                  onChange={handleChange('longDescription')}
                />
                {/* errors.longDescription && console.log(errors.longDescription) */}
                <FormLabel>Url Facebook</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='facebook'
                  value={values.facebook}
                  onChange={handleChange('facebook')}
                />
                {/* errors.facebook && console.log(errors.facebook) */}
                <FormLabel>Url Twitter</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='twitter'
                  value={values.twitter}
                  onChange={handleChange('twitter')}
                />
                {/* errors.twitter && console.log(errors.twitter) */}
                <FormLabel>Url Instagram</FormLabel>
                <Input
                  type='text'
                  variant="flushed"
                  placeholder="Agregue sus redes sociales"
                  name='instagram'
                  value={values.instagram}
                  onChange={handleChange('instagram')}
                />
                {/* errors.instagram && console.log(errors.instagram) */}

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
