import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorAlert } from "../../common/GenericAlert";
import { Box, Spinner } from "@chakra-ui/react";
import { News } from "./News";
import { requestNews } from "../newsReducer";
import { useSelector, useDispatch } from "react-redux";
const NewsDetail = () => {
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
    dispatch(requestNews({ id, isPrivate: true }));
  }, [dispatch, id]);
  return (
    <Box>
      <Box h="fit-content" py={9} bg="gray.200" rounded="md" boxShadow="md">
        {status === "success" && success && <News {...data} />}
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
    </Box>
  );
};

export default NewsDetail;
