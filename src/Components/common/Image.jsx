import React from 'react';

import { Image } from '@chakra-ui/react';

const ImageComponent = ({ src, alt }) => {
  return (
    <Image src={src} />
  );
}

export default ImageComponent;