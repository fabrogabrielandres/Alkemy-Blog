import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenericTitle as AboutTitle } from "../common/GenericTitle";
import AboutUs from "./AboutUs/AboutUs";
import Members from "./Members";

import { getUs } from "../../features/Us/usSlice";
import { Box } from "@chakra-ui/react";
import { ErrorAlert } from "../common/GenericAlert";

const About = () => {
<<<<<<< HEAD
	return (
		<>
			<AboutTitle text='Nosotros' />
			<AboutUs text='Text dinamico obtenido desde la API' />
			<Members/>
		</>
	);
=======
  const [loading, setLoading] = useState(null);
  const { us } = useSelector((state) => state.us);
  const dispatch = useDispatch();
  
  useEffect(() => {

    setLoading(true);
    dispatch(getUs());
    setLoading(null);
  }, [dispatch]);

  if (loading) return <Box>...loading </Box>;

  return us ? (
    <>
      <AboutTitle text="Nosotros" />
      <AboutUs text="Text dinamico obtenido desde la API" />
      <Members us={us} />
    </>
  ) : (
    <ErrorAlert title={"error"} description={"Problemas al cargar los datos..."} />
  );
>>>>>>> 88482920b12ff735da58af911ab10eff426b35b5
};

export default About;
