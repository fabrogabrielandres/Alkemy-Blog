import React from 'react';
import { Button, FormLabel, Input, Text } from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { peticionPostPatchFormProjects } from './peticionPostPatchFormProjects';
import { schemaFormCreateEditProjects } from './schemaFormCreateEditProjects';



export const FormProjects = ({ project }) => {


    const initialValues = { name: "", image: "", description: "", due_date: "" }


    //esta funcion combierte a la imagen a base64 
    const convertirABase64 = (image) => {
        return new Promise((res, req) => {
            let reader = new FileReader();
            reader.readAsDataURL(image)
            reader.onload = () => {
                res(reader.result)
                console.log(reader.result)
            }
        }
        )
    }
    return (
        <>

            <Formik
                enableReinitialize
                initialValues={project.id ? project : initialValues}
                validationSchema={schemaFormCreateEditProjects}
                onSubmit={async (values) => {
                    const img = values.image
                    const imgbase = await convertirABase64(img)
                    values.image = imgbase
                    peticionPostPatchFormProjects(values)
                }}>
                {(props) => (
                    <Form>
                        <FormLabel >Name</FormLabel>
                        <Field name="name">
                            {({ field }) => (
                                <>
                                    <Input {...field} id="name" placeholder="name" />
                                    <ErrorMessage name="name">
                                        {(message) => <Text>{message}</Text>}
                                    </ErrorMessage>
                                </>
                            )}
                        </Field>
                        <FormLabel >Descripcion</FormLabel>
                        <Field name="description">
                            {({ field, form }) => (
                                <>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={field.value}
                                        onChange={(event, editor) => {
                                            //si saco el props event se rompe , no sacarlo
                                            form.setFieldValue(field.name, editor.getData());
                                        }}
                                    />
                                    <ErrorMessage name="description">
                                        {message => <Text> {message} </Text>}
                                    </ErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="due_date">
                            {({ field, form }) => (
                                <>
                                    <FormLabel htmlFor="name">Fecha</FormLabel>
                                    <Input {...field} id="due_date" placeholder="Fecha" />
                                    <ErrorMessage name="due_date">{message => <Text>{message}</Text>}</ErrorMessage>
                                </>
                            )}
                        </Field>
                        <Field name="image" >
                            {({ field, form }) => (
                                <>
                                    <Input name="image" type="file" onChange={(event) => {
                                        form.setFieldValue(field.name, event.target.files[0])
                                    }}
                                    />
                                    <ErrorMessage name="image">{message => <Text>{message}</Text>}</ErrorMessage>
                                </>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            colorScheme="pink"
                            type="submit"
                        >
                            {project.id ? <Text>"Actualizar"</Text> : <Text>"Crear"</Text>}
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
