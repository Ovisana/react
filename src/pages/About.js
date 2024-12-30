import React from 'react';
import Services from '../components/Services';
import AboutSection from './about/AboutSection';
import TestimonySection from './TestimonySection';
import InstagramGallery from './InstagramGallery';
import HeroSection from './about/HeroSection';
// import ServicesSection from '../components/ServicesSection'; // Adjust path based on your structure

const About = () => {
  return (
    <>
      <HeroSection/>
      <Services/>
      <AboutSection/>
      <TestimonySection/>
      <InstagramGallery/>
    </>
  );
};

export default About;
