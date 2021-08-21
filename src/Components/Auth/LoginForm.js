import { Box, Button, Container, Input, Text } from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const schemaLogin = Yup.object().shape({
	email: Yup.string().email('Formato email invalido').required('Requerido'),
	password: Yup.string().min(6, 'Faltan caracteres').required('Requerido')
		.matches(/^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[°!"#$%&/()=?¡;:_,.:-])/, 'contraseña incorrecta')
});

export const LoginForm = () => {
	const initialValues = { email: '', password: '' };
	let user = { email: '', password: '' };

	return (
		<Container mt={10}>
			<Formik
				initialValues={initialValues}
				validationSchema={schemaLogin}
				onSubmit={(values) => {
					user = { ...values };
					console.log(user);
				}
				}

			>
				{
					() => (
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
								<Button type="submit" colorScheme="pink">Login</Button>
							</Box>
						</Form>
					)
				}
			</Formik>
		</Container>
	);
};
