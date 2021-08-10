import React from 'react';
import {GenericTitle as AboutTitle} from '../common/GenericTitle';
import AboutUs from './AboutUs/AboutUs';
import Members from './Members';


const About = () => {
  return (
    <>
      <AboutTitle text='Nosotros' />
      <AboutUs text='Text dinamico obtenido desde la API' />
      <Members/>
    </>
  );
}

export default About;
