import React from 'react';
// import ProductGrid from '../components/ProductGrid';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Choose from '../pages/Choose';
import DealOfTheMonth from '../pages/DealOfTheMonth';
import TestimonySection from '../pages/TestimonySection';
import InstagramGallery from '../pages/InstagramGallery';
import NewShoesArrival from './NewShoesArrival';
const Home = () => {
  return (
    <>
      <Hero/>
      <Services/>
      <NewShoesArrival/>
      <Choose/>
      <DealOfTheMonth/>
      <TestimonySection/>
      <InstagramGallery/>
    </>
  );
};

export default Home;