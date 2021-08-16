import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
export const ActivitiesAlert = ({
  title = "Error!",
  message = "",
  type = "error",
}) => (
  <Alert
    status={type}
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
    w="90%"
    m="5%"
    rounded="md"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      {title}
    </AlertTitle>
    <AlertDescription maxWidth="sm">{message}</AlertDescription>
  </Alert>
);
