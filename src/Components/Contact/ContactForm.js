import React from 'react';
import { Formik, Form } from 'formik';
import {
    Button,
    Container,
    Input,
    Textarea
} from "@chakra-ui/react";
import axios from 'axios';

import CustomField from './CustomField';
import { SignupSchema } from './ValidationSchema';

const ContactForm = () => {

    const url = 'http://ongapi.alkemy.org/api/contacts#t53';

    return(

    <div>
        <Formik

            initialValues={{
                name: '',
                email: '',
		        phone: '',
                message: ''
            }}

            validationSchema={SignupSchema}

            onSubmit={ (values) => {

                const body = {
                    ...values,
                    phone: String(values.phone)
                }

                axios.post(url, body)
                
                .then(response => console.log(response))
                .catch(err => console.log(err))
                
            }}
        >

        {() => (
            <Form>
                    <Container>

                        <CustomField fieldType={Input} name="name" label="Nombre"/>
                        
                        <CustomField fieldType={Input} name="email" type="email" label="Email"/>

                        <CustomField fieldType={Input} name="phone" type="number" label="Celular" placeholder="Prefijo y número sin espacios ni guiones. Ej: 1156473829"/>
                        
                        <CustomField fieldType={Textarea} name ='message' label="Mensaje"/>

                        <CustomField fieldType={Button} name='button' type="submit">Enviar</CustomField>

                    </Container>
            </Form>
        )}
        </Formik>
    </div>
)
};

export default ContactForm