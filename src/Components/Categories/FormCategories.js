import React, { useEffect} from 'react';
import { Button, FormLabel, Input, Text } from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { schemaFormCreateEditCategories } from './schemaFormCreateEditCategories';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCategorie, getCategoriByid, updateCategorie } from '../../features/Categories/categoriesSlice';

export const FormCategories = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    let {id} = useParams()
    
    useEffect(() => {
        dispatch(getCategoriByid(id))
    }, [id,history])
    
    const categories= useSelector(state => state.categories.categorie)
    const initialValues = {
        "name": "",
        "description": "",
        "image": "",
    }

    const convertirABase64 = (image) => {
        return new Promise((res, req) => {
            let reader = new FileReader();
            reader.readAsDataURL(image)
            reader.onload = () => {
                res(reader.result)
            }
        }
        )
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={ categories.id ? categories : initialValues}
                validationSchema={schemaFormCreateEditCategories}
                onSubmit={async (values) => {
                    const img = values.image;
                    const imgbase = await convertirABase64(img);
                    values.image = imgbase;
                    if(id){
                        dispatch(updateCategorie(values))
                        history.push( "/backoffice/categories/")
                    }else{
                        dispatch(createCategorie(values))
                        history.push( "/backoffice/categories/")
                    }
                    
                }   }
                >
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
                            colorScheme="blue"
                            type="submit"
                        >
                            {categories.id ? <Text>Actualiza</Text> : <Text>Crear</Text>}
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
