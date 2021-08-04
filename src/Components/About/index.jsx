import React from 'react';
import Title from '../Title/Title';
import AboutUs from './AboutUs/AboutUs';


const About = () => {
  return (
    <>
      <Title titleText='Nosotros' />
      <AboutUs text='Text dinamico obtenido desde la API' />
    </>
  );
}

export default About;