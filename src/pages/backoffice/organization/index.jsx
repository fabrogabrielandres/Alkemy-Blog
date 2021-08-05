import React from 'react';
import { useHistory } from 'react-router-dom';
import imageLogo from '../../../common/image/png/LOGO-SOMOS MAS.png'

import {
  Image,
  Box,
  Button,
  Container,
  Text
} from '@chakra-ui/react';

const DataOrganization = () => {

  const history = useHistory();

  const goToEdit = () => {
    history.push('/backoffice/organization/edit')
  }

  return (
    <Container centerContent mt='50px' mb='10px'>
      <Text fontSize='3em' fontWeight='bold'>Somos Más{/* name props api */}</Text>

      <Box boxSize="sm" w='100%'>
        <Image src={imageLogo} alt="Logo de ONG" /> {/*Logo props api */}
      </Box>

      <Box w='100%'>
        <p>Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social. </p> {/* short description props api */}
      </Box>

      <Button colorScheme="blue" onClick={goToEdit}>Editar información</Button>
    </Container>
  );
}

export default DataOrganization;