import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Spinner,
  Button,
  ButtonGroup,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const histoy = useHistory();

  const fetchNewsList = async () => {
    try {
      let response = await axios.get("http://ongapi.alkemy.org/api/new#t53");

      setNewsList(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(
        "Ha ocurrido un error al realizar la peticion. Intentelo de nuevo"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchNewsList();
  }, []);

  return (
    <>
      {error && (
        <Alert
          status="error"
          height="200px"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <AlertIcon />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Opss!!
          </AlertTitle>
          <AlertDescription maxWidth="sm">{error}</AlertDescription>
        </Alert>
      )}
      {!loading ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                {!error && newsList ? (
                  <Button
                    onClick={() => histoy.push("/backoffice/news/create")}
                  >
                    Crear Nuevo
                  </Button>
                ) : (
                  <Button
                    onClick={() => (window.location = "/backoffice/news")}
                  >
                    Recargar Pagina
                  </Button>
                )}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {newsList ? (
              newsList.map((news, key) => (
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
              ))
            ) : (
              <Tr>
                <Td>No hay Novedades</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      ) : (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
    </>
  );
};

export default NewsList;
