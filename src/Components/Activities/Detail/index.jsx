import React, { useState, useEffect } from "react";
import { GenericTitle as ActivityTitle } from "../../common/GenericTitle";
import { Content } from "./Content";
import { getActivities } from "../ServicesActivities";
import { useParams } from "react-router-dom";
import { Flex, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useCallback } from "react";
import { ActivitiesAlert } from "../ActivitiesAlert";

const ActivitiesDetails = () => {
  const [values, setValues] = useState("");
  const [alert, setAlert] = useState(false);
  const { id } = useParams();
  const activitiesForID = useCallback(async (id) => {
    try {
      const res = await getActivities(id);
      setValues(res.data.data);
    } catch (error) {
      setAlert(true);
      console.log(error);
    }
  }, []);
  useEffect(() => {
    activitiesForID(id);
  }, [activitiesForID, id]);
  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="90%"
        bgColor={`${values ? "white" : "#0000"}`}
        p={4}
        m="5"
        rounded="md"
      >
        {!alert &&
          (values ? (
            <>
              <ActivityTitle text={values.name} src={values.image} />
              <Content content={values.description} />
            </>
          ) : (
            <>
              <Skeleton w="90%" height="40vh" />
              <SkeletonText w="90%" noOfLines={8} spacing={4} />
            </>
          ))}
        {alert && (
          <ActivitiesAlert message="Algo falló al cargar la actividad." />
        )}
      </Flex>
    </>
  );
};
export default ActivitiesDetails;
