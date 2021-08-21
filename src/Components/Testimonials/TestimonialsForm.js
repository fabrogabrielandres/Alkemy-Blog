import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { schemaFormCreateEditTestimonials } from './schemaFormCreateEditTestimonials';
import { peticionPostPatchFormTestimonials } from './peticionPostPatchFormTestimonials';
import { Button, FormLabel, Input, Text } from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const TestimonialsForm = ({ testimonials }) => {

	const initialValues = {
		'name': '',
		'description': '',
		'image': '',
	};

	const convertirABase64 = (image) => {
		return new Promise((res) => {
			let reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = () => {
				res(reader.result);
			};
		}
		);
	};
    
	return (
		<>

			<Formik
				enableReinitialize
				initialValues={testimonials.id ? testimonials : initialValues}
				validationSchema={schemaFormCreateEditTestimonials}
				onSubmit={async (values) => {
					const img = values.image;
					const imgbase = await convertirABase64(img);
					values.image = imgbase;
					peticionPostPatchFormTestimonials(values);
				}   }
			>
				{() => (
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
										form.setFieldValue(field.name, event.target.files[0]);
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
							{testimonials.id ? <Text>Actualiza</Text> : <Text>Crear</Text>}
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};
