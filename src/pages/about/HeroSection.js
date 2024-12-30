import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="hero-wrap hero-bread"
      style={{ backgroundImage: `url('/assets/images/bg_6.jpg')` }} // Update the path based on your public folder structure
    >
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 text-center">
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="/">Home</a>
              </span>{' '}
              <span>About</span>
            </p>
            <h1 className="mb-0 bread">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
