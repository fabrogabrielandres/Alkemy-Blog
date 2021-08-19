import React, { useCallback, useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ErrorAlert } from "../../common/GenericAlert";
import { Box } from "@chakra-ui/react";
import { News } from "./News";
import { requestNews } from "../newsReducer";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../../Spinner/Spinner";

const Message = lazy(() => import('../../Messages'));

const NewsDetail = () => {

  //Estado que indica si es el final del componente News
  const [limitOfComponent, setLimitOfComponent] = useState(false);

  //Estados para setear la posición de un elemento y la posición en la pantalla
  const [heightBox, setHeightBox] = useState(0);
  const [scrollWindow, setScrollWindow] = useState(0);

  const handleScroll = useCallback(() => {
    const position = window.scrollY
    setScrollWindow(position);

    if (scrollWindow > heightBox) {
      setLimitOfComponent(true)
    } else {
      setLimitOfComponent(false)
    }
  }, [heightBox, scrollWindow]);


  const dispatch = useDispatch();
  const {
    news: {
      success = undefined,
      data = undefined,
      message = "Algo falló",
    } = {},
    status,
  } = useSelector((state) => {
    return state.news;
  });
  const { id } = useParams();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll])

  useEffect(() => {
    dispatch(requestNews({ id, isPrivate: true }));

  }, [dispatch, id]);
  return (
    <>
      <Box h="fit-content" py={9} bg="gray.200" rounded="md" boxShadow="md">
        {status === "success" && success && <News {...data} setHeightBox={setHeightBox} />}
        {status === "loading" && (
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
        {(success === false || status === "failed") && (
          <ErrorAlert
            title="Novedad no encontrada"
            description="Hubo un error al buscar la novedad. Pruebe reiniciar la página"
          />
        )}
      </Box>
      {limitOfComponent && (
        <Suspense justifyContent='center' fallback={<Spinner />}>
          <Message />
        </Suspense>
      )}
    </>
  );
};

export default NewsDetail;




/*

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
        setNews(response.data);
        setError(false);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [id]);

  return (
    <>
      <Box>
        <GenericTitle text={title} />
        <Box
          h='fit-content'
          py={9}
          bg='gray.200'
          rounded='md'
          boxShadow='md'
        >
          {
            news && <News {...news} setHeightBox={setHeightBox} />
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
        {limitOfComponent && (

          <Suspense justifyContent='center' fallback={<Spinner />}>
            <Message />
          </Suspense>

        )}
      </Box>
    </>
  );
};

export default NewsDetail;

*/