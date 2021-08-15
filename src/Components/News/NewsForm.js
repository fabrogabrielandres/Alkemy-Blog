import * as React from "react";
import { Formik, Form } from "formik";
import "../FormStyles.css";
import { yupSchema as newsYupSchema } from "./yupSchema";
import { requestDataCall as requestCategoriesData } from "./requestDataCall";
import { CustomSelect as CategorySelect } from "./CustomSelect";
import { FormField as Field } from "./FormField";
import { Button, Input, Text, Flex } from "@chakra-ui/react";
import { CustomCKEditor as SpanishCKEditor } from "./CKEditor";
import { dataToBase64String } from "./dataToBase64String";
import { newsRequests } from "../../Services/News/newsRequests";
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
  const CATEGORIES_ENDPOINT = process.env.REACT_APP_ENDPOINT_CATEGORIES;
  const CATEGORIES_URL = API_BASE_URL + CATEGORIES_ENDPOINT;
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
    editing && dataToBase64String({ url: image }, setBase64String);
  }, [CATEGORIES_URL, editing, image]);
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
      defaultValue={category_id}
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
      onSubmit={async (values, { setFieldError, resetForm }) => {
        let errors = {};
        if (!values.image && !base64String) {
          errors.file = "Imagen requerida";
        }
        let method = editing ? "put" : "post";
        const isPrivate = true;
        if (Object.keys(errors).length === 0) {
          try {
            const response = await newsRequests[method](values, isPrivate);
            console.log(response);
            setSubmitResponse(response);
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
      }}
    >
      {({ isSubmitting, setFieldValue }) => {
        function handleFileInput(event) {
          const file = event.target.files[0];
          setFieldValue("file", file);
          dataToBase64String({ file }, setFieldValue, "image");
        }
        return (
          <Flex justify="center" align="center" w="100%" h="100vh">
            <Flex maxW="75%" maxH="75%">
              <Form>
                <TitleField />
                <CategoryField />
                <ContentField />
                <FileField onChange={handleFileInput} />
                <Button type="submit">{editing ? "Editar" : "Crear"}</Button>
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
