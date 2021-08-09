import React, { useState, useEffect } from 'react'
import axios from "axios"
import facebookIcon from "./icons/facebook-icon.png"
import linkedinIcon from "./icons/linkedin-icon.png"

import {
    Table,
    Tr,
    Image,
    Flex,
    Box,
    Th,
    Container,
    Thead,
    Link
} from "@chakra-ui/react"

const Members = () => {

    const [list, setList] = useState([]);

    const URL = "http://ongapi.alkemy.org/api/members"

    useEffect(() => {
        const getMembers = async () => {
            await axios.get(URL)
                .then(result => setList(result.data.data))
                .catch(err => console.error(err))
        }
        getMembers()
    }, [])

    return (
        <Container maxW="container.lg">
            {list.map(member =>
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
            )}
        </Container>
    )
}

export default Members
