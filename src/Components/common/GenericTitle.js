import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export const GenericTitle = ({
  text = "Sin titulo",
  src = "https://elgritodelsur.com.ar/wp-content/uploads/2019/09/IMG-20190912-WA0028.jpg",
}) => {
  return (
    <Flex
      h="40vh"
      w="100%"
      bgColor="gray"
      bgImage={`linear-gradient(#3335, #3335), url(${src})`}
      bgRepeat="no-repeat"
      bgSize="100% 40vh"
      align="center"
      justify="center"
    >
      <Heading
        fontSize="2.3rem"
        textShadow="0px 3px 9px #333"
        color="white"
        textTransform="uppercase"
        textAlign="center"
      >
        {text}
      </Heading>
    </Flex>
  );
};
