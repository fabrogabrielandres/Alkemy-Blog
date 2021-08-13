import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import {
  Heading,
  Flex,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";

// Validaciones del formulario
const activitiesSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .required("Required"),
  description: Yup.string()
    .min(16, "La descripcion debe tener al menos 10 caracteres")
    .max(400, "La descripcion debe tener un maximo de 4 caracteres")
    .required("Required"),
  image: Yup.mixed()
    .required("A file is required")
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) =>
        value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    ),
});

export const ActivitiesForm = () => {
  // Valores iniciales, si llega un id por params se settean.
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    image: {},
  });

  // Flag que muestra el form cuando cargan los valores
  const [showForm, setShowForm] = useState(false);

  // Capturo id por params en caso de ser formulario de edicion.
  const { id } = useParams();
  const pathActivities = process.env.REACT_APP_API_ACTIVITIES;

  // useEffect que trae una actividad por id para edicion de actividades.
  useEffect(() => {
    if (id) {
      axios
        .get(`http://ongapi.alkemy.org/api${pathActivities}/${id}`)
        .then((res) => {
          setInitialValues({
            name: res.data.data.name,
            description: res.data.data.description,
            image: {},
          });
          setShowForm(true);
        })
        .catch((e) => console.log(`error: ${e}`));
    } else {
      setShowForm(true);
    }
  }, [id, pathActivities]);

  // Manejo del submit
  const handleFormSubmit = async (values) => {
    const base64Image = await toBase64DOS(values.image);
    const data = {
      name: values.name,
      description: values.description,
      image: base64Image,
    };
    if (id) {
      try {
        const response = await axios.put(
          `http://ongapi.alkemy.org/api${pathActivities}/${id}`,
          data
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        alert(`Error al editar la actividad \n${error}`);
      }
    } else {
      try {
        const response = await axios.post(
          `http://ongapi.alkemy.org/api${pathActivities}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        alert(`Error al guardar la actividad \n${error}`);
      }
    }
  };

  // Function que convierte el file a base64
  const toBase64DOS = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <Flex
      w="30rem"
      minH="20rem"
      direction="column"
      bg="gray.100"
      p={12}
      rounded={6}
      boxShadow="lg"
    >
      <Heading size="lg" mb="6">
        {id ? "Editar actividad" : "Creacion de actividad"}
      </Heading>
      {showForm && (
        <Formik
          initialValues={{
            name: initialValues.name,
            description: initialValues.description,
            image: initialValues.image,
          }}
          enableReinitialize
          validationSchema={activitiesSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            setFieldValue,
            errors,
            touched,
            values,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Flex direction="column">
                <Input
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Nombre"
                  variant="filled"
                  bg="white"
                  type="text"
                  mb="3"
                />
                <FormLabel>Descripcion</FormLabel>

                <Field name="description">
                  {({ field, form }) => (
                    <CKEditor
                      editor={ClassicEditor}
                      data={field.value}
                      onChange={(event, editor) => {
                        form.setFieldValue(field.name, editor.getData());
                      }}
                    />
                  )}
                </Field>
                <Field name="imagen">
                  {({ form }) => (
                    <Input
                      name="image"
                      type="file"
                      my={6}
                      onChange={(event) => {
                        form.setFieldValue("image", event.target.files[0]);
                      }}
                    />
                  )}
                </Field>

                <Button type="submit" colorScheme="teal" mb="6">
                  Ingresar
                </Button>
                {errors.name && touched.name ? (
                  <FormControl isInvalid={errors.name && touched.name}>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                ) : null}
                {errors.description && touched.description ? (
                  <FormControl
                    isInvalid={errors.description && touched.description}
                  >
                    <FormErrorMessage>{errors.description}</FormErrorMessage>
                  </FormControl>
                ) : null}
                {errors.image && touched.image ? (
                  <FormControl isInvalid={errors.image && touched.image}>
                    <FormErrorMessage>{errors.image}</FormErrorMessage>
                  </FormControl>
                ) : null}
              </Flex>
            </Form>
          )}
        </Formik>
      )}
    </Flex>
  );
};
