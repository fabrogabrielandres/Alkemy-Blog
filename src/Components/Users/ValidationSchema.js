/* eslint-disable no-mixed-spaces-and-tabs */
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(4, 'Nombre demasiado corto')
		.max(50, 'Nombre demasiado extenso')
		.required('Ingresá un nombre'),

	email: Yup.string()
		.email('E-mail inválido')
		.required('E-mail requerido'),

	password: Yup.string()
		.required('Deberías ingresar una contraseña')
		.min(8, 'Escribí una contraseña más larga')
		.max(25, 'Contraseña demasiado larga'),

	role_id: Yup.string()
		.required('Seleccioná un rol'),

	profilePhoto: Yup
		.mixed()
		.test('extension', 'Formatos permitidos: .jpeg, .jpg y .png', (value) =>
			value

            &&
            (
            	String(value).split('.').reverse().includes('jpg') ||
                String(value).split('.').reverse().includes('png') ||
                String(value).split('.').reverse().includes('jpeg')
            )
		),

	description: Yup.string()
		.min(10, 'Descripción debe contener más de 10 caracteres')
		.max(200, 'Descripción demasiado larga')

}
);