import * as React from "react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import "../FormStyles.css";
import { yupSchema as newsYupSchema } from "./yupSchema";
import { requestDataCall as requestCategoriesData } from "./requestDataCall";
import { CustomSelect as CategorySelect } from "./CustomSelect";
import { FormField as Field } from "./FormField";
import { Image, Button, Input, Text, Flex, VStack } from "@chakra-ui/react";
import { CustomCKEditor as SpanishCKEditor } from "./CKEditor";
import { dataToBase64String } from "./dataToBase64String";
import { newsRequests } from "../../Services/News/newsRequests";
import { requestNews } from "./newsReducer";
import { useSelector, useDispatch } from "react-redux";
export const BaseForm = ({
  name = "",
  content = "",
  image = "",
  category_id = "",
  user_id = "",
  id = "",
}) => {
  const initialValues = {
    name: name ?? "",
    content: name ?? "",
    image: image ?? "",
    category_id: category_id ?? "",
    user_id: user_id ?? "",
    file: "",
    id: id ?? "",
  };
  const API_BASE_URL = "http://ongapi.alkemy.org/public/api";
  const CATEGORIES_ENDPOINT = process.env.REACT_APP_ENDPOINT_CATEGORIES;
  const CATEGORIES_URL = API_BASE_URL + CATEGORIES_ENDPOINT;
  const undefinedResponse = {
    success: undefined,
    data: undefined,
    message: "Peticion en procesada",
  };
  const [submitResponse, setSubmitResponse] = React.useState(undefinedResponse);
  const [categoriesResponseData, setCategoriesResponseData] =
    React.useState(undefinedResponse);
  const editing = /\d+/.test(id);
  React.useEffect(() => {
    requestCategoriesData(CATEGORIES_URL, setCategoriesResponseData);
  }, [CATEGORIES_URL, editing, image]);
  const TitleField = () => (
    <Field
      bgColor="white"
      label="Titulo"
      name="name"
      type="text"
      component={Input}
    />
  );
  const ContentField = () => (
    <Field
      showErrorIcon={false}
      label="Contenido"
      name="content"
      withHelpers
      newsContent={content}
      component={SpanishCKEditor}
    />
  );
  const CategoryField = () => (
    <Field
      label="Categoria"
      name="category_id"
      bgColor="white"
      component={CategorySelect}
      placeholder="Select Category"
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
      w={{ base: "50", sm: "45%" }}
      value={undefined}
    />
  );
  const ImageField = ({ ...props }) => (
    <Field label="Imagen" {...props} name="image" component={Image} />
  );
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={newsYupSchema}
      onSubmit={async (values, { setFieldError, resetForm }) => {
        console.log("submitVal", values);
        let errors = {};
        try {
          const response = await newsRequests[editing ? "put" : "post"](
            values,
            true
          );
          setSubmitResponse(response);
          resetForm();
        } catch (exception) {
          setSubmitResponse(exception.response);
        }
        let message = "";
        // add any server errors
        for (let field in errors) {
          message = errors[field];
          setFieldError(field, message);
        }
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        function handleFileInput(event) {
          const file = event.target.files[0];
          setFieldValue("file", file);
          dataToBase64String({ file }, setFieldValue, "image");
        }
        console.log("renderVal", values);
        return (
          <Flex justify="center" align="center" w="100%" minH="100vh">
            <VStack
              shadow="md"
              as={Form}
              p="5"
              m="2.5"
              w={{ base: "95%", sm: "70%", lg: "50%" }}
              bgColor="gray.50"
              rounded="md"
            >
              <TitleField />
              <CategoryField />
              <ContentField />
              <ImageField src={values.image} />
              <FileField onChange={handleFileInput} />
              <Button
                isFullWidth
                bgColor="blue.400"
                color="white"
                type="submit"
              >
                {editing ? "Editar" : "Crear"}
              </Button>
              {(submitResponse.success !== undefined || isSubmitting) && (
                <Text color="yellow.600" children={submitResponse.message} />
              )}
            </VStack>
          </Flex>
        );
      }}
    </Formik>
  );
};
export const NewsForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { news, status } = useSelector((state) => {
    return state.news;
  });
  React.useEffect(() => {
    /^\d+$/.test(id) && dispatch(requestNews({ id, isPrivate: true }));
  }, [dispatch, id]);
  return <BaseForm {...news?.data} />;
};
