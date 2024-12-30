import React from 'react';
import OwlCarousel from 'react-owl-carousel';  // Import Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel Theme CSS

const TestimonySection = () => {
  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row">
          {/* Services Section */}
          <div className="col-lg-5">
            <div className="services-flow">
              <div className="services-2 p-4 d-flex">
                <div className="icon">
                  <span className="flaticon-bag"></span>
                </div>
                <div className="text">
                  <h3>Free Shipping</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex">
                <div className="icon">
                  <span className="flaticon-heart-box"></span>
                </div>
                <div className="text">
                  <h3>Valuable Gifts</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex">
                <div className="icon">
                  <span className="flaticon-payment-security"></span>
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
              <div className="services-2 p-4 d-flex">
                <div className="icon">
                  <span className="flaticon-customer-service"></span>
                </div>
                <div className="text">
                  <h3>All Day Support</h3>
                  <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="col-lg-7">
            <div className="heading-section mb-5">
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
              </p>
            </div>

            {/* React Owl Carousel */}
            <OwlCarousel 
              className="carousel-testimony owl-carousel"
              loop 
              margin={10} 
              nav 
              items={1} // Display one item at a time
            >
              {/* Testimonial Item 1 */}
              <div className="item">
                <div className="testimony-wrap">
                  <div className="user-img mb-4" style={{ backgroundImage: 'url(/assets/images/person_1.jpg)' }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Marketing Manager</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Item 2 */}
              <div className="item">
                <div className="testimony-wrap">
                  <div className="user-img mb-4" style={{ backgroundImage: 'url(/assets/images/person_2.jpg)' }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">Interface Designer</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Item 3 */}
              <div className="item">
                <div className="testimony-wrap">
                  <div className="user-img mb-4" style={{ backgroundImage: 'url(/assets/images/person_3.jpg)' }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-4 pl-4 line">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <p className="name">Garreth Smith</p>
                    <span className="position">UI Designer</span>
                  </div>
                </div>
              </div>

              {/* Add more testimonial items if needed */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
