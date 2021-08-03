import * as React from "react";
import { Formik, Form } from "formik";
import "../FormStyles.css";
import axios from "axios";
import { yupSchema as membersYupSchema } from "./yupSchema";
import { FormField as Field } from "./FormField";
import { Button, Input, Text, Flex, Image } from "@chakra-ui/react";
import { MembersCKEditor } from "./MembersCKEditor";
import { dataToBase64String } from "./../News/dataToBase64String";
import { GROUP_CODE, API_BASE_URL } from "./../../common/configurations";
export const MembersForm = ({
  name = "",
  description = "",
  image = "",
  facebookUrl = "",
  linkedinUrl = "",
  id = "",
}) => {
  const editing = Boolean(id);
  const CREATE_MEMBERS_URL = API_BASE_URL + "/members#t53";
  const EDIT_MEMBERS_URL = API_BASE_URL + `/members/${id}#t53`;
  const undefinedResponse = {
    success: undefined,
    data: undefined,
    message: `Solicitando ${editing ? "edición" : "creacion"}`,
  };
  const [submitResponse, setSubmitResponse] = React.useState(undefinedResponse);
  const [base64String, setBase64String] = React.useState("");
  React.useEffect(() => {
    //editing &&  dataToBase64String({url: image }, setBase64String);
  }, []);
  const NameField = () => (
    <Field
      label="Nombre"
      name="name"
      component={Input}
      placeholder="Nombre del miembro"
    />
  );
  const ImageField = ({ src }) => (
    <Field
      label="Imagen"
      name="image"
      component={Image}
      boxSize="150px"
      src={src}
      alt="Imagen del miembro"
      fallbackSrc={
        "https://starwhitedental.com/wp-content/uploads/2018/12/Team-Member-Male-Placeholder.png"
      }
    />
  );
  const DescriptionField = () => (
    <Field
      label="Descripción"
      name="description"
      withHelpers
      membersDescription={description}
      component={MembersCKEditor}
      language="es"
    />
  );
  const FacebookField = () => (
    <Field
      name="facebookUrl"
      component={Input}
      placeholder=""
      label={"Enlace a Facebook"}
    />
  );
  const LinkedInField = () => (
    <Field
      name="linkedinUrl"
      label={"Enlace a LinkedIn"}
      component={Input}
      placeholder=""
    />
  );
  const FileField = ({ ...props }) => (
    <Field
      {...props}
      name="file"
      label="Subir imagen"
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
        description,
        image,
        facebookUrl,
        linkedinUrl,
        file: "",
        id,
      }}
      validationSchema={membersYupSchema}
      onSubmit={async (values, { setFieldError, resetForm }) => {
        let errors = {};
        if (!values.image && !base64String) {
          errors.file = "Imagen requerida";
        }
        let endpoint = editing ? EDIT_MEMBERS_URL : CREATE_MEMBERS_URL;
        let method = editing ? "put" : "post";
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        if (Object.keys(errors).length === 0) {
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
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        function handleFileInput(event) {
          const file = event.target.files[0];
          setFieldValue("file", file);
          dataToBase64String({ file }, setFieldValue, "image");
        }
        return (
          <Flex justify="center" align="center" w="100%">
            <Flex maxW="75%" maxH="75%">
              <Form>
                <NameField />
                <ImageField src={values.image} />
                <FileField onChange={handleFileInput} />
                <LinkedInField />
                <FacebookField />
                <DescriptionField />
                <Button isFullWidth type="submit">
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
