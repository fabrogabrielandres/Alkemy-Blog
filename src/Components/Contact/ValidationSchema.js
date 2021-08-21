import * as Yup from 'yup';

// Yup's validation schema. Used as value of 
// Formik's validationSchema property. 

export const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(4, 'Nombre demasiado corto')
		.max(50, 'Nombre demasiado extenso')
		.required('Ingresá un nombre'),

	email: Yup.string()
		.email('E-mail inválido')
		.required('E-mail requerido'),

	phone: Yup.string()
		.required('Ingresá un número válido')
	//Regex for every cellphone number
	//This regular expression allows all possible combinations of all types of Argentine numbers and their prefixes.
		.matches(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/, 'Número no válido'),

	message: Yup.string()
		.min(2, 'El mensaje debe contener al menos 2 caracteres')
		.max(500, 'El mensaje puede contener máximo 500 caracteres')

}
);