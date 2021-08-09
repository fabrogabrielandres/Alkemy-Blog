import React from 'react';
import Title from '../Title/Title';
import AboutUs from './AboutUs/AboutUs';
import Members from './Members';


const About = () => {
  return (
    <>
      <Title titleText='Nosotros' />
      <AboutUs text='Text dinamico obtenido desde la API' />
      <Members/>
    </>
  );
}

export default About;