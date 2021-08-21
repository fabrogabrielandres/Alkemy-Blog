import React from "react";
import facebookIcon from "./icons/facebook-icon.png";
import linkedinIcon from "./icons/linkedin-icon.png";

import {
  Table,
  Tr,
  Image,
  Flex,
  Box,
  Th,
  Container,
  Thead,
  Link,
} from "@chakra-ui/react";

const Members = ({us}) => {
 

  return (
    <Container maxW="container.lg">
      {us.map((member) => (
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Flex alignItems="center" flexWrap="wrap">
                <Th>
                  <Image
                    src={member.image}
                    alt={member.name}
                    boxSize="100px"
                    objectFit="cover"
                  />
                </Th>

                {/* Name and description */}
                <Th>
                  <Box width="150px">
                    <strong>{member.name}</strong>
                    <br></br>
                    <strong>{member.description}</strong>
                  </Box>
                </Th>
              </Flex>

              {/* Social media icons */}
              <Th>
                <Flex flexDirection="row">
                  <Link href={member.facebookUrl} isExternal>
                    <Image m={2} src={facebookIcon} />
                  </Link>
                  <Link href={member.linkedinUrl} isExternal>
                    <Image m={2} src={linkedinIcon} />
                  </Link>
                </Flex>
              </Th>
            </Tr>
          </Thead>
        </Table>
      ))}
    </Container>
  );
};

export default Members;
