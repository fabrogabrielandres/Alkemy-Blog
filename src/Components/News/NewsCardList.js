import { Flex } from '@chakra-ui/react'
import React from 'react'
import { GenericCard } from "../common/GenericCard"

const NewsCardList = ({ news }) => {
    return (
        <div>
            {news.map(entry =>
                <Flex justifyContent="center" m={4} key={entry.id}>
                    <GenericCard
                        key={entry.id}
                        name={entry.name}
                        image={entry.image}
                        endpoint={`/novedades/${entry.id}`}
                    />
                </Flex>
            )}
        </div>
    )
}

export default NewsCardList
