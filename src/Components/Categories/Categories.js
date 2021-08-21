import React, { useEffect, useState } from 'react';
//import '../CardListStyles.css';
import { Table, Thead, Tbody, Tr, Th, Td, Grid, GridItem, Button, Link, } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategorie, fetchListCategories } from '../../features/Categories/categoriesSlice';
import { useHistory } from 'react-router-dom';
import { TableSkeleton } from '../Skeleton/TableSkeleton';


const CategoriesList = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [loading, setloading] = useState(false);


	useEffect(() => {
		setloading(true);
		dispatch(fetchListCategories());
		setloading(false);
	}, []);

	const categorias = useSelector(state => state.categories.listCategories);
	console.log(categorias);

	function editar(id) {
		history.push(`/backoffice/categories/edit/${id}`);
	}

	function eliminar(id) {
		dispatch(deleteCategorie(id));
	}

	return (
		<div>
			<Grid templateColumns="repeat(5, 1fr)" gap={4}>
				<GridItem colSpan={2} h="10"><strong>Listado de Categorias</strong></GridItem>
				<GridItem colStart={4} colEnd={6} h="10">
					<Link color="teal.500" onClick={() => history.push('/backoffice/categories/create')}>
                        Nueva Categoria
					</Link>
				</GridItem>
			</Grid>
			{/* categorias > 0 ? (skeleton o tabla) : no hay categoria  */}
			{(categorias.length > 0) ?
				((loading === true) ?
					<TableSkeleton />

					:

					(
						<Table variant="simple">
							<Thead>
								<Tr>
									<Th>Nombre Categoria</Th>
									<Th>Fecha de Creacion</Th>
									<Th>Acciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								{
									categorias.map((categoria) => {
										return (
											<Tr key={categoria.id}>
												<Td>{categoria.name}</Td>
												<Td>
													{`${String(categoria.created_at).split('T')[0]
													}, ${String(categoria.created_at).split('T')[1]}`}
												</Td>
												<Td>
													<Button colorScheme="yellow" size="sm" onClick={() => editar(categoria.id)}>
                                                        Editar
													</Button>
													<Button colorScheme="red" size="sm" onClick={() => eliminar(categoria.id)}>
                                                        Eliminar
													</Button>
												</Td>
											</Tr>
										);

									})
								}

							</Tbody>
						</Table>
					)
				)
				:
				<h4 style={{ textAlign: 'center' }}>No hay categorias para mostrar</h4>
















			}

		</div>
	);
};

export default CategoriesList;