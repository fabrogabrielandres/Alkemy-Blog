import React from 'react';
import { Formik, Form } from 'formik';
import {
	Button,
	Select,
	Container,
	Input,
	Textarea
} from '@chakra-ui/react';
import CustomField from './CustomField';
import { postPrivateUsers, putPrivateUsers } from '../../Services/usersApiService';
import { SignupSchema } from './ValidationSchema';

export const UserForm = ({ user = {} }) => {

	//"user" values will be used to make the form behave as an edit form.
	//If this component is used as a child from a parent which provide
	//user values, those values should be at least the values listed on
	//Formik's "initialValues" list to work properly.

	//Default: user={} which means the form will behave as a "create" form.

	//Some form inputs like "id" or "password" will render only if there is
	//somethin into "user.name"

	return (

		<div>
			<h1>{user.name ? 'Editar' : 'Crear'}</h1>

			<Formik

				initialValues={{
					name: user.name || '',
					email: user.email || '',
					password: user.password || '',
					role_id: user.role_id || '',
					profilePhoto: '',
					description: user.description || ''
				}}

				validationSchema={SignupSchema}

				onSubmit={(values) => {

					try {
						if (user.id) {
							putPrivateUsers(user.id, values);
						} else {
							postPrivateUsers(values);
						}
					} catch (error) {
						console.log(error);
					}

				}}
			>

				{() => (
					<Form>
						<Container>

							{user.name ?
								<CustomField
									fieldType={Input}
									name='id'
									type='number'
									label='ID'
									value={user.id}
									diabled
								/>

								: null}

							<CustomField fieldType={Input} name="name" label="Nombre" />

							<CustomField fieldType={Input} name="email" type="email" label="Email" />

							{!user.name ?
								<CustomField
									fieldType={Input}
									name='password'
									type='password'
									label='Contraseña'
								/>

								: null}

							<CustomField fieldType={Select} name="role_id" placeholder='Selección de rol' label="Rol">
								<option value="1">Administrador</option>
								<option value="2">Usuario</option>
							</CustomField>

							<CustomField fieldType={Input} name='profilePhoto' type='file' label="Foto de perfil" />

							<CustomField fieldType={Textarea} name='description' label="Comentarios" />

							<CustomField fieldType={Button} name='button' type="submit">Enviar</CustomField>

						</Container>
					</Form>
				)}
			</Formik>
		</div>
	);
};