import React, { useState } from 'react';
import { Container, Progress, Text } from '@chakra-ui/react';

export const ProgressBarValue = ({ time = 1000, complete, type = '%', color = 'green', size = 'lg' }) => {

  const [value, setValue] = useState(0);

  const addProgress = () => {
    for (let i = 0; i <= complete; i++) {
      setTimeout(() => {
        setValue(i);
      }, time)
    }
  }

  addProgress();

  return (
    <Container alignContent='center'>
      <Text fontSize="xl">Cargando...</Text>
      <Progress
        hasStripe
        value={value}
        size={size}
        isAnimated
        colorScheme={color}
      />
      <Text fontSize="md">{value} {type}</Text>
    </Container>
  );
}