import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { GenericTitle } from "../../common/GenericTitle";
import { News } from "./News";
import axios from "axios";

// Function que crea la URL a fetchear con el id correcto
const getURL = (id) => `http://ongapi.alkemy.org/api/news/${id}`;

// ID's validos cargados en la API de prueba:
// 57, 58, 61, 62, 224, 230, 242, 248, 249

const Index = ({ title }) => {
  // Estado que guarda la novedad a mostrar
  const [news, setNews] = useState(null);

  // Estado que indica si hubo un error al llamar a la noticia
  const [error, setError] = useState(false);

  // Capturo el ID por params
  const { id } = useParams();

  // GET a la API que trae la novedad a mostrar
  useEffect(() => {
    if (id) {
      axios
        .get(getURL(id))
        .then((res) => {
          setNews(res.data.data);
          setError(false);
        })
        .catch(() => setError(true));
    }
  }, [id]);

  return (
    <Box>
      <GenericTitle text={title} />
      <Box h="fit-content" py={9} bg="gray.200" rounded="md" boxShadow="md">
        {news && <News {...news} />}
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
              Novedad no encontrada!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Ocurrio un error con la novedad solicitada.
            </AlertDescription>
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Index;
