import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import {
  Image,
  Box
} from '@chakra-ui/react'

const Carrousel = () => {
  const baseURL = 'http://ongapi.alkemy.org/api';

  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([]);

  const getSlides = async () => {
    try {
      const getData = await axios.get(`${baseURL}/slides`);
      const slides = await getData.data.data;
      setSlides(slides)
      console.log(slides)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSlides()
  }, [])

  const change = values => {
    setValue(values)
  }

  return (
    <>
      <Carousel
        plugins={[
          'arrows',
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000,
            }
          },
        ]}
        animationSpeed={2000}
        value={value}
        slides={slides.map(slide => (
          <Box w='20%' ml='auto' mr='auto' boxShadow="2xl">
            <Image src={slide.image} />
          </Box>
        ))}
        onChange={change}
      >
      </Carousel>
      <Box ml='auto' mr='auto'>
        <Dots
          number={slides.length}
          thumbnails={slides.map(slide => (
            <Box w='20%' ml='auto' mr='auto' boxShadow="2xl">
              <Image src={slide.image} />
            </Box>
          ))}
          value={value}
          onChange={change}
        />
      </Box>
    </ >
  );
};

export default Carrousel;