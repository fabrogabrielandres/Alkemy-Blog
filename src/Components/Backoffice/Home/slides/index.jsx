import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Box,
  Image,
  Button,
} from '@chakra-ui/react';
import SlidesForm from '../../../Slides/SlidesForm';

const Slides = () => {

  const [allSlides, setAllSlides] = useState([]);
  const [oneSlides, setOneSlides] = useState({});
  const [callToForm, setCallToForm] = useState(false);

  const baseUrl = 'http://ongapi.alkemy.org/api';

  const goToEditSlide = (slides) => {
    setOneSlides(slides)
    setCallToForm(true)
  }

  useEffect(() => {
    const getDataToSliders = async () => {
      try {
        const getResp = await axios.get(`${baseUrl}/slides`);
        const dataSlides = await getResp.data.data;
        setAllSlides(dataSlides);
      } catch (error) {
        console.log(error);
      }
    }
    getDataToSliders();
  }, [])

  return (
    <>
      <Box
        display="flex"
        flexDir='row'
        flexWrap='wrap'
        alignItems="center"
        justifyContent="center"
      >
        {
          allSlides.slice(0, 3).map((slides) => (
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" key={slides.id} mx='20px' my='10px'>
              <Image src={slides.image} alt={slides.image} w='200px' h='100px' />
              <Box
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                zIndex='100px'
                isTruncated
              >
                {slides.description}
              </Box>
              <Button onClick={() => goToEditSlide(slides)}>Editar</Button>
            </Box>
          ))
        }
      </Box>
      {callToForm && <SlidesForm match={oneSlides || ''} setCallToForm={setCallToForm} />}
      {allSlides.length < 3 ? <Button onClick={goToEditSlide}>Crear</Button> : null}
    </>
  );
}

export default Slides;