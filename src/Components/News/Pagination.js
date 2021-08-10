import { Flex, Link } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Flex justifyContent="center">
            {pageNumbers.map(number => (
                <Flex display="inline" key={number}>
                    <Link
                        m={3}
                        onClick={() => paginate(number)}
                        href="#"
                    >
                        <strong>{number}</strong>
                    </Link>
                </Flex>
            ))}
        </Flex>
    );
};

export default Pagination;
