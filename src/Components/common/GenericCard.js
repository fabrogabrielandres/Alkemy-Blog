import React from "react";
import { Image, VStack, Link, Heading } from "@chakra-ui/react";
import { cardDefault } from "./DefaultBase64GenericCardImg";

export const GenericCard = ({
  name: title = "Sin titulo",
  image = cardDefault,
  endpoint = "#",
}) => {
  return (
    <Link _activeLink={{}} _focus={{}} m="1" p="0" _hover={{}} href={endpoint}>
      <VStack spacing={1}
        rounded="lg"
        shadow="md"
        bg="white"
        h={{ base: "75vh", sm: "256px", md: "256px" }}
        w={{ base: "85vw", sm: "192px", md: "320px" }}
      >
        <Image roundedTop="lg" w="100%" h="75%" src={image} alt="Imagen" objectFit="cover" />
        <Heading
          w="95%"
          h="20%"
          color="gray.700"
          fontWeight="bold"
          textTransform="uppercase"
          wordBreak="break-word"
          as="h3"
          size="sm"
          overflow="hidden"
        >
          {title}
        </Heading>
      </VStack>
    </Link>
  );
};
