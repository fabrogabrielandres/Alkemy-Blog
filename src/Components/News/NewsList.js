import React, { useEffect, useState } from 'react';
import { AspectRatio, Button, ButtonGroup, Image, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export const NewsList = () => {
    const [newsList, setNewsList] = useState([])
    const histoy = useHistory()

    const fetchNewsList = async () => {
        try {
            let response = await axios.get("http://ongapi.alkemy.org/api/news#t53")

            setNewsList(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNewsList()
    }, [])

    return (
        <>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>
                            <Button onClick={() => histoy.push("/backoffice/news/create")}>Crear Nuevo</Button>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {newsList ?
                        newsList.map((news, key) =>
                            <Tr key={key}>
                                <>
                                    <Td>
                                        <AspectRatio maxW="455px" ratio={1}>
                                            <Image src={news.image} boxSize="300px" alt="" />
                                        </AspectRatio>
                                    </Td>

                                    <Td> {news.name} </Td>
                                    <Td> {news.created_at} </Td>
                                    <Td>
                                        <ButtonGroup variant="outline" spacing="6">
                                            <Button colorScheme="blue">Editar</Button>
                                            <Button>Eliminar</Button>
                                        </ButtonGroup>
                                    </Td>

                                </>
                            </Tr>
                        )
                        : <Tr>
                            <Td>No hay Novedades</Td>
                        </Tr>
                    }
                </Tbody>
            </Table>
        </>
    )
}

export default NewsList; 