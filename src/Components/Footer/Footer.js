import React, {useState} from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
//import "bootstrap/dist/css/bootstrap.min.css";

import * as Yup from "yup";

const schemaValidate = Yup.object().shape({
    email: Yup.string().email("Ingrese un email valido").required("Este campo es requerido"),
});

const Footer = () => {
  const [exito, setExito] = useState(false);

  return (
    <div className="container my-5">
    <footer className="text-center text-lg-start" style={{backgroundColor: "#db6930"}}>
      <div className="container d-flex justify-content-center py-5">
        {exito && <p>Tu email ha sido registrado</p>}
      {!localStorage.getItem("datos") &&
      <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={schemaValidate}
      onSubmit={(values) => {
        localStorage.setItem("datos", JSON.stringify(values));
        setExito(true);    
      }}
    >
      {(props) => (
        <Form>
          <Field name="email">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.email && form.touched.email}
              >
                <Input {...field} id="email" type="email" placeholder="Email" />
                <FormErrorMessage style={{justifyContent: "center"}}>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>          
          <Button mt={4} colorScheme="teal" type="submit">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
}
      </div>
      <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2021 Copyright: ONG Team 53 - React
      </div>
    </footer>
  </div>
    
  );
};
export default Footer;
