import React, { useEffect } from 'react';
import $ from 'jquery';

const Hero = () => {
  useEffect(() => {
    // Initialize the Owl Carousel after the component mounts
    const owlCarousel = window.$(".home-slider.owl-carousel");
    if (owlCarousel.length > 0) {
      owlCarousel.owlCarousel({
        items: 1, // Number of items to display
        loop: true, // Infinite looping
        autoplay: true, // Autoplay slides
        autoplayTimeout: 5000, // Slide transition timeout
        autoplayHoverPause: true, // Pause on hover
      });
    }
  }, []); // Runs once when the component mounts

  return (
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        {/* First Slide */}
        <div className="slider-item js-fullheight">
          <div className="overlay"></div>
          <div className="container-fluid p-0">
            <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
              <img className="one-third order-md-last img-fluid" src="/assets/images/bg_1.png" alt="Background 1" />
              <div className="one-forth d-flex align-items-center " data-scrollax="properties: { translateY: '70%' }">
                <div className="text">
                  <span className="subheading">#New Arrival</span>
                  <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
                  <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <p><a href="#" className="btn-custom">Discover Now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="slider-item js-fullheight">
          <div className="overlay"></div>
          <div className="container-fluid p-0">
            <div className="row d-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
              <img className="one-third order-md-last img-fluid" src="/assets/images/bg_2.png" alt="Background 2" />
              <div className="one-forth d-flex align-items-center" data-scrollax="properties: { translateY: '70%' }">
                <div className="text">
                  <span className="subheading">#New Arrival</span>
                  <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
                  <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <p><a href="#" className="btn-custom">Discover Now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
