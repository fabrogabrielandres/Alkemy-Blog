import React, { useEffect } from "react";
import {
  AspectRatio,
  Spinner,
  Button,
  ButtonGroup,
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
import { requestNews } from "./newsReducer";
import { useSelector, useDispatch } from "react-redux";
import ImageLazy from "../LazyLoad";

export const NewsList = () => {
  const dispatch = useDispatch();
  const {
    news: { success = undefined, data = [], message = "Something went wrong." },
    status,
  } = useSelector((state) => {
    return state.news;
  });
  const histoy = useHistory();

  useEffect(() => {
    dispatch(requestNews({ id: null, isPrivate: true }));
  }, [dispatch]);

  return (
    <>
      {(status === "failed" || success === false) && (
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
          <AlertDescription maxWidth="sm">{message}</AlertDescription>
        </Alert>
      )}
      {status === "success" && success ? (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                {success && data ? (
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
            {data ? (
              data.map((news, key) => (
                <Tr key={key}>
                  <>
                    <Td>
                      <AspectRatio maxW="455px" ratio={1}>
                        {
                          <ImageLazy
                            src={news.image}
                            alt={news.name}
                            boxSize="300px"
                          />
                        }
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
