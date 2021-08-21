import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSlides, putSlides, postSlides } from '../../Services/slidesApiService';
import FormSlides from './Form';
import '../FormStyles.css';

const SlidesForm = ({ match, setCallToForm }) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	const [exito, setExito] = useState(false);
	const [carga, setCarga] = useState(false);
	const [error, setError] = useState(null);

	const { id } = useParams();
	useEffect(() => {
		setLoading(true);
		if (id || match.id) {
			getSlides(id ? id : match.id)
				.then((res) => {
					setData({
						nombre: res.data.data.name,
						descripcion: res.data.data.description,
						imagen: res.data.data.image,
						order: res.data.data.order,
					});
					setLoading(false);
					setCarga(true);
				})
				.catch(() => {
					setError('Error: El id de Slide recibido no existe');
					setLoading(false);
				});
		} else {
			setData({
				nombre: '',
				descripcion: '',
				imagen: '',
				order: '',
			});
			setLoading(false);
			setCarga(true);
		}
	}, [id]);

	const handleSubmit = async (values) => {
		const json = {
			// eslint-disable-next-line no-undef
			image: Buffer.from(String(values.imagen.name)).toString('base64'),
			name: values.nombre,
			description: values.descripcion,
			order: values.order
		};
		const create = (slide) => postSlides(slide);
		const update = (slide) => putSlides(id, slide);
		try {
			const res = match.id ? await update(json) : await create(json);
			console.log(res);
			if (match.id) {
				setExito('El Slide fue actualizado exitosamente');
				setTimeout(() => {
					setCallToForm(false);

				}, 3000);
			} else {
				setExito('El Slide fue creado exitosamente');
				setTimeout(() => {
					setCallToForm(false);

				}, 3000);
			}
		} catch (error) {
			setError('Hubo un error al conectar con el servidor');
		}
	};

	return (
		<div>
			{exito && <h4 style={{ textAlign: 'center' }}>{exito}</h4>}
			{error && <h4 style={{ textAlign: 'center' }}>{error}</h4>}
			{loading && !carga && (
				<h4 style={{ textAlign: 'center' }}>Cargando...</h4>
			)}
			{!loading && carga && (
				<div>
					<h4>{match.id ? 'Editar Slide' : 'Crear Slide'}</h4>
					<FormSlides
						nombre={data.nombre}
						descripcion={data.descripcion}
						imagen={data.imagen}
						order={data.order}
						handleOnSubmit={handleSubmit}
					/>
				</div>
			)}
		</div>
	);
};

export default SlidesForm;
