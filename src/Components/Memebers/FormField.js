import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as React from "react";
/**
 * @param component required react element to render
 * @param label optional renders a label for component
 * @param withHelpers boolean whether or not to pass formik useField helpers to component
 * @param ...props all other props are given to component
 */
export const FormField = ({ component, label, withHelpers, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const optionalProps = withHelpers ? helpers : {};
  let Element = component;
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      {Boolean(label) && (
        <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      )}
      <Element {...field} {...optionalProps} {...props} />
      <FormErrorMessage color="red.600">{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
