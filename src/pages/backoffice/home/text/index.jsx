import React, { useState } from 'react';

import {
  Text,
  Button
} from '@chakra-ui/react';
import FormEditText from './FormEditText';

const TextBackofficeHome = () => {

  const [openTextArea, setOpenTextArea] = useState(false)
  const [content, setContent] = useState(' Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.')

  const editTextArea = () => {
    setOpenTextArea(true);
  }

  return (
    <>
      <Text fontSize='xl' mx='50px' my='50px' >
        {content}
      </Text>
      <Button onClick={editTextArea}>Editar</Button>
      {openTextArea &&
        <FormEditText
          setContent={setContent}
          content={content}
          setOpenTextArea={setOpenTextArea}
        />}
    </>
  );
}

export default TextBackofficeHome;