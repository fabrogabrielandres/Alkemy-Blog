import React, {useState, useEffect} from 'react';
//import '../CardListStyles.css';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Grid,
    GridItem,
    Button,
    Link,
  } from "@chakra-ui/react"
import { deleteCategory, getCategories } from './ServicesCategories';

const CategoriesList = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [exito, setExito] = useState(false);

 
    const getAllCategories = async () => {
        setLoading(true);
        try {
            const res = await getCategories();
            setCategorias(res.data.data);
            setLoading(false);
            setExito(true);
        } catch (error) {
            setError("Ha ocurrido un error al conectar con el servidor. Intentelo de nuevo")
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    function editar(id) {
        window.location.href = `/backoffice/categories/edit/${id}`;
    }

    function eliminar(id) {
        deleteCategory(id);
    }

    return (
        <div>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2} h="10"><strong>Listado de Categorias</strong></GridItem>
                <GridItem colStart={4} colEnd={6} h="10">
                <Link color="teal.500" href="/backoffice/categories/create">
                    Nueva Categoria
                </Link>
                </GridItem>
            </Grid>
            {error &&
            <div>
                <h4 style={{ textAlign: "center" }}>{error}</h4>
                <Button colorScheme="red" size="sm" onClick={() => window.location.href = "/backoffice/categories"}>
                Recargar
                </Button>
            </div>
            }
            {loading && !exito && <h4 style={{ textAlign: "center" }}>Cargando...</h4>}
            {!loading && exito && categorias.length > 0 && (
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
                            return(
                                <Tr key={categoria.id}>
                                    <Td>{categoria.name}</Td>
                                    <Td>
                                        {`${String(categoria.created_at).split("T")[0]
                                        }, ${String(categoria.created_at).split("T")[1]}`}
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
                            )
                        })
                    }
                </Tbody>
            </Table>
            )}
            {!loading && exito && categorias.length === 0 && <h4 style={{ textAlign: "center" }}>No hay categorias para mostrar</h4>}
        </div>
    );
}
 
export default CategoriesList;