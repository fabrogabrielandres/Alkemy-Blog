import * as React from "react";
import { Formik, Form} from "formik";
import "../FormStyles.css";
import axios from "axios";
import { yupSchema as newsYupSchema } from "./yupSchema";
import { requestDataCall as requestCategoriesData } from "./requestDataCall";
import { CustomSelect as CategorySelect } from "./CustomSelect";
import { FormField as Field } from "./FormField";
import {
  Button,
  Input,
  Text,
  Flex,
} from "@chakra-ui/react";
import { CustomCKEditor as SpanishCKEditor } from "./CKEditor";
import { dataToBase64String } from "./dataToBase64String";
export const NewsForm = ({
  name = "",
  content = "",
  image = "",
  category_id = "",
  user_id = "",
  id = "",
}) => {
  const editing = image;
  const API_BASE_URL = "http://ongapi.alkemy.org/public/api";
  const CREATE_NEWS_URL = API_BASE_URL + "/news#t53";
  const EDIT_NEWS_URL = API_BASE_URL + `/news/${id}#t53`;
  const CATEGORIES_URL = API_BASE_URL + "/categories#t53";
  const undefinedResponse = {
    success: undefined,
    data: undefined,
    message: "Request is being processed",
  };
  const [submitResponse, setSubmitResponse] = React.useState(undefinedResponse);
  const [categoriesResponseData, setCategoriesResponseData] =
    React.useState(undefinedResponse);
  const [base64String, setBase64String] = React.useState("");
  React.useEffect(() => {
    requestCategoriesData(CATEGORIES_URL, setCategoriesResponseData);
    editing &&  dataToBase64String({url: image }, setBase64String);
  }, []);
  const TitleField = () => (
    <Field
      label="Titulo"
      name="name"
      component={Input}
      placeholder="News Name"
    />
  );
  const ContentField = () => (
    <Field
      label="Contenido"
      name="content"
      withHelpers
      newsContent={content}
      component={SpanishCKEditor}
    />
  );
  const CategoryField = () => (
    <Field
      name="category_id"
      component={CategorySelect}
      placeholder="Select Category"
      value={category_id}
      {...categoriesResponseData}
    />
  );
  const FileField = ({ ...props }) => (
    <Field
      {...props}
      name="file"
      component={Input}
      type="file"
      accept="image/jpg, image/png, image/jpeg"
      variant="unstyled"
      size="xs"
      value={undefined}
    />
  );
  return (
    <Formik
      initialValues={{
        name,
        content,
        image: base64String,
        category_id,
        user_id,
        file: image,
        id,
      }}
      validationSchema={newsYupSchema}
      onSubmit={async (values, { setSubmitting, setFieldError, resetForm }) => {
        let errors = {};
        if(!values.image && !base64String) {errors.file = "Imagen requerida"};
        let endpoint = editing ? EDIT_NEWS_URL : CREATE_NEWS_URL;
        let method = editing ? "put" : "post";
        const config = { headers: { "Content-Type": "application/json" } };
        if(Object.keys(errors).length === 0) {
          try {
            const response = await axios[method](endpoint, values, config);
            console.log(response);
            setSubmitResponse(response.data);
            resetForm();
          } catch (exception) {
            console.log(exception.response);
          }
        }
        let message = "";
        // add any server errors
        for (let field in errors) {
          message = errors[field];
          setFieldError(field, message);
        }
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
          console.log(values);
        function handleFileInput(event) {
          const file = event.target.files[0];
          setFieldValue("file", file);
          dataToBase64String({ file }, setFieldValue,"image");
        }
        return (
          <Flex justify="center" align="center" w="100%" h="100vh">
            <Flex maxW="75%" maxH="75%">
              <Form>
                <TitleField />
                <CategoryField />
                <ContentField />
                <FileField onChange={handleFileInput} />
                <Button type="submit">
                  {editing ? "Editar" : "Crear"}
                </Button>
                {(submitResponse.success !== undefined || isSubmitting) && (
                  <Text color="yellow.600" children={submitResponse.message} />
                )}
              </Form>
            </Flex>
          </Flex>
        );
      }}
    </Formik>
  );
};
