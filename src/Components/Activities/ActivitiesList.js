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
import { deleteActivities, getActivities } from './ServicesActivities';

const ActivitiesList = () => {
    const [actividades, setActividades] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [exito, setExito] = useState(false);

    const activitiesAndSettings = async (id) => {
        setLoading(true);
        try {
            const res = await getActivities(id)
            setActividades(res.data.data);
            setLoading(false);
            setExito(true);
        } catch (error) {
            setError("Ha ocurrido un error al conectar con el servidor. Intentelo de nuevo")
            setLoading(false);
        }
    }

    useEffect(() => {
        activitiesAndSettings();
    }, []);

    function editar(id) {
       window.location.href = `/backoffice/activities/edit/${id}`;
    }

    function eliminar(id) {
        deleteActivities(id)
    }

    return (
        <div>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={2} h="10"><strong>Listado de Actividades</strong></GridItem>
                <GridItem colStart={4} colEnd={6} h="10">
                <Link color="teal.500" href="/backoffice/activities/create">
                    Agregar Actividad
                </Link>
                </GridItem>
            </Grid>
            {error &&
            <div>
                <h4 style={{ textAlign: "center" }}>{error}</h4>
                <Button colorScheme="red" size="sm" onClick={() => window.location.href = "/backoffice/activities"}>
                    Recargar
                </Button>
            </div>
            }
            {loading && !exito && <h4 style={{ textAlign: "center" }}>Cargando...</h4>}
            {!loading && exito && actividades.length > 0 && (
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Nombre Actividad</Th>
                        <Th>Imagen</Th>
                        <Th>Fecha de Creacion</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        actividades.map((actividad) => {
                            return(
                                <Tr key={actividad.id}>
                                    <Td>{actividad.name}</Td>
                                    <Td>
                                        {actividad.image === null ?
                                            <p>Sin Imagen</p>
                                            : 
                                            <img alt="" src={actividad.image}
                                            width={200} height={200}
                                            />
                                        }
                                    </Td>
                                    <Td>
                                        {`${String(actividad.created_at).split("T")[0]
                                        }, ${String(actividad.created_at).split("T")[1]}`}
                                    </Td>
                                    <Td>
                                    <Button colorScheme="yellow" size="sm" onClick={() => editar(actividad.id)}>
                                        Editar
                                    </Button>
                                    <Button colorScheme="red" size="sm" onClick={() => eliminar(actividad.id)}>
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
            {!loading && exito && actividades.length === 0 && <h4 style={{ textAlign: "center" }}>No hay actividades para mostrar</h4>}
        </div>
    );
}
 
export default ActivitiesList;