import React from 'react';

const InstagramGallery = () => {
  return (
    <section className="ftco-gallery">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 heading-section text-center mb-4 ">
            <h2 className="mb-4">Follow Us On Instagram</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          {/* Image Gallery */}
          <div className="col-md-4 col-lg-2 ">
            <a href="/assets/images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(/assets/images/gallery-1.jpg)' }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a href="/assets/images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(/assets/images/gallery-2.jpg)' }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a href="/assets/images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(/assets/images/gallery-3.jpg)' }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a href="/assets/images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(/assets/images/gallery-4.jpg)' }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a href="/assets/images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(/assets/images/gallery-5.jpg)' }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-lg-2 ">
            <a href="/assets/images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(/assets/images/gallery-6.jpg)' }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
