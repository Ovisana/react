import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Fetching product data from FakeStore API
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/1'); // Fetch a single product for the section
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProduct();
  }, []);

  if (!productData) {
    return <div>Loading...</div>;  // Loading state until the data is fetched
  }

  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${productData.image})` }}>
            <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
              <span className="icon-play"></span>
            </a>
          </div>
          <div className="col-md-7 py-md-5 wrap-about pb-md-5">
            <div className="heading-section-bold mb-4 mt-md-5">
              <div className="ml-md-0">
                <h2 className="mb-4">Established Since 1975</h2>
              </div>
            </div>
            <div className="pb-md-5 pb-4">
              <p>{productData.description}</p>  {/* Dynamic description */}
              <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
              <p><a href="#" className="btn btn-primary">Shop now</a></p>  {/* You can change the link dynamically as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
