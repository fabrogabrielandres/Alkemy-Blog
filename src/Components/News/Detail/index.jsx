import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
} from "@chakra-ui/react";
import { GenericTitle } from "../../common/GenericTitle";
import { News } from "./News";
import { newsRequests } from "../../../Services/News/newsRequests";

// Function que crea la URL a fetchear con el id correcto
// ID's validos cargados en la API de prueba:
// 57, 58, 61, 62, 224, 230, 242, 248, 249

const NewsDetail = ({ title }) => {
  // Estado que guarda la novedad a mostrar
  const [news, setNews] = useState(null);

  // Estado que indica si hubo un error al llamar a la noticia
  const [error, setError] = useState(false);

  // Estado que indica si se esta realizando una peticion
  const [loading, setLoading] = useState(false);

  // Capturo el ID por params
  const { id } = useParams();

  // GET a la API que trae la novedad a mostrar
  useEffect(() => {
      setLoading(true);
      newsRequests
      .get(id)
      .then((response) => {
        console.log(response);
        setNews(response.data);
        setError(false);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [id]);

  return (
    <Box>
      <GenericTitle text={title} />
      <Box
        h='fit-content'
        py={9}
        bg='gray.200'
        rounded='md'
        boxShadow='md'>
        {
          news && <News {...news} />
        }
        {loading && (
          <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        )}
        {
          error && (
            <Alert
              status="error"
              height="200px"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center">
              <AlertIcon />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Novedad no encontrada!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Ocurrio un error con la novedad solicitada.
              </AlertDescription>
            </Alert>
          )
        }
      </Box>
    </Box>
  );
};

export default NewsDetail;
