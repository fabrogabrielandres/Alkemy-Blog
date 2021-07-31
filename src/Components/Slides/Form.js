import React from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as Yup from "yup";

const schemaFormCreateEdit = Yup.object().shape({
  nombre: Yup.string()
    .min(4, "El nombre debe contener mas de 4 caracteres")
    .required("Este campo es requerido"),
  descripcion: Yup.string().required("La descripcion es requerida"),
  order: Yup.number().required("Ingrese un numero de order valido"),
  imagen: Yup.mixed()
    .required("La imagen es requerida")
    .test(
      "fileFormat",
      "solo archivos en formato image/jpg , image/png",
      (value) => {
        return value && ["image/jpg", "image/png"].includes(value.type);
      }
    ),
});

const FormSlides = ({
  nombre,
  descripcion,
  imagen,
  order,
  handleOnSubmit,
}) => {
  return (
    <Formik
      initialValues={{
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        order: order,
      }}
      validationSchema={schemaFormCreateEdit}
      onSubmit={(values) => {
        handleOnSubmit(values);
      }}
    >
      {(props) => (
        <Form>
          <Field name="nombre">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.nombre && form.touched.nombre}
              >
                <FormLabel htmlFor="nombre">Nombre</FormLabel>
                <Input {...field} id="nombre" placeholder="Nombre" />
                <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <FormLabel>Descripcion</FormLabel>

          <Field name="descripcion">
            {({ field, form }) => (
              <>
                <CKEditor
                  editor={ClassicEditor}
                  data={field.value}
                  onChange={(event, editor) => {
                    form.setFieldValue(field.name, editor.getData());
                  }}
                />
                <FormControl isInvalid={form.errors.descripcion}>
                  <FormErrorMessage>{form.errors.descripcion}</FormErrorMessage>
                </FormControl>
              </>
            )}
          </Field>
          <Field name="imagen">
            {({ field, form }) => (
              <>
                <Input
                  name="imagen"
                  type="file"
                  onChange={(event) => {
                    form.setFieldValue(field.name, event.target.files[0]);
                  }}
                />
                <FormControl
                  isInvalid={form.errors.imagen && form.touched.imagen}
                >
                  <FormErrorMessage>{form.errors.imagen}</FormErrorMessage>
                </FormControl>
              </>
            )}
          </Field>
          <Field name="order">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.order && form.touched.order}>
                <FormLabel htmlFor="order">Order</FormLabel>
                <Input
                  type="number"
                  {...field}
                  id="order"
                  placeholder="Order"
                />
                <FormErrorMessage>{form.errors.order}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={4} colorScheme="teal" type="submit">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default FormSlides;
