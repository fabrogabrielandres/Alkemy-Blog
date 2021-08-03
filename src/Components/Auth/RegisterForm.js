import { Box, Button, Container, Input, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react';
import * as Yup from "yup"


const schemaRegister = Yup.object().shape({
    email: Yup.string().email("Formato email invalido").required("Requerido"),
    password: Yup.string().min(6, "Faltan caracteres").required("Requerido")
        .matches(/^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[°!"#$%&/()=?¡;:_,.:-])/, "contraseña incorrecta"),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords no son iguales")
})

export const RegisterForm = () => {
    const initialValues = { email: "", password: "",confirmPassword:"" }
    let user = { email: "", password: "" }

    return (
        <Container mt={10}>
            <Formik
                initialValues={initialValues}
                validationSchema={schemaRegister}
                onSubmit={( {email, password  } ) => {
                     
                    user={email,password}
                    console.log(user);
                }
                }

            >
                {
                    (props) => (
                        <Form>
                            <Box>
                                <Text>Email</Text>
                                <Field name="email">
                                    {({ field }) => (
                                        <Input {...field} id="email" placeholder="email" />
                                    )}
                                </Field>
                                <ErrorMessage name="email">{(message) => <Text>{message}</Text>}</ErrorMessage>
                            </Box>
                            <Box>
                                <Text>Passoword</Text>
                                <Field name="password">
                                    {({ field }) =>
                                        <Input {...field} id="password" type="password" placeholder="passoword" />
                                    }</Field>
                                <ErrorMessage name="password">{(message) => <Text>{message}</Text>}</ErrorMessage>

                            </Box>
                            <Box>
                                <Text>Confirmar Password</Text>
                                <Field name="confirmPassword">
                                    {({ field }) =>
                                        <Input {...field} id="confirmPassword" type="password" placeholder="confirmPassword" />
                                    }</Field>
                                <ErrorMessage name="confirmPassword">{(message) => <Text>{message}</Text>}</ErrorMessage>
                                <Box mt={7}>
                                    <Button type="submit" colorScheme="pink">Resgistrar</Button>
                                </Box>
                            </Box>
                        </Form>
                    )
                }
            </Formik>
        </Container>
    )
}
