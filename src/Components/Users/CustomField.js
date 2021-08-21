import React from 'react';
import { useField } from 'formik';
import {
	FormControl,
	FormLabel,
	FormErrorMessage
} from '@chakra-ui/react';

const CustomField = ({label, fieldType, ...props }) => {

  
	const [field, meta, helpers] = useField(props);
  
	//fieldType is the actual input imported from chakra 
	//which is displayed as a Field tag dinamically
	const Field = fieldType;
	return (
		<FormControl isInvalid={meta.touched && meta.error}>
			<FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
			<Field {...field} {...helpers} {...props}>
        
			</Field>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default CustomField;
