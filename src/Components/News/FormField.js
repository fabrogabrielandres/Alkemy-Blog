import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import { TiInfoOutline } from "react-icons/ti";
import * as React from "react";
/**
 * @param component required react element to render
 * @param label optional renders a label for component
 * @param withHelpers boolean whether or not to pass formik useField helpers to component
 * @param ...props all other props are given to component
 */
export const FormField = ({
  component = () => null,
  label,
  withHelpers,
  showErrorMessage = false,
  showErrorIcon = true,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const optionalProps = withHelpers ? helpers : {};
  let Element = component;
  const validity = meta.touched && meta.error;
  return (
    <FormControl w="100%" isInvalid={validity}>
      {Boolean(label) && (
        <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      )}
      <InputGroup spacing="0" as={Stack}>
        <Element {...field} {...optionalProps} {...props} />
        {showErrorIcon && (
          <InputRightElement
            children={
              validity && (
                <TiInfoOutline
                  style={{ backgroundColor: label === "Imagen" ? "" : "white" }}
                  color="red"
                />
              )
            }
          />
        )}
      </InputGroup>
      {showErrorMessage && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};
