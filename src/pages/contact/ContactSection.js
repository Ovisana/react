import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Simulating an API fetch for contact info
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contact'); // Replace with actual API endpoint
        if (!response.ok) throw new Error('Failed to fetch contact information');
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact information:', error);
      }
    };
    fetchContactInfo();
  }, []);

  // Show a loading state if `contactInfo` is null
  if (!contactInfo) {
    return <div>Loading contact information...</div>;
  }

  return (
    <section className="ftco-section contact-section bg-light">
      <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p><span>Address:</span> {contactInfo.address}</p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Phone:</span> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Email:</span> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex">
            <div className="info bg-white p-4">
              <p>
                <span>Website:</span> <a href={contactInfo.website}>{contactInfo.website}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-white p-5 contact-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div id="map" className="bg-white">
              {/* Embed Google Maps or dynamic map */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
