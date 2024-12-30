import React, { useEffect } from 'react';

const DealOfTheMonth = () => {
  useEffect(() => {
    // Countdown timer logic if required, or can use a package like 'react-countdown' for better management
    const updateTimer = () => {
      const endTime = new Date('2024-12-31T23:59:59').getTime();
      const now = new Date().getTime();
      const remainingTime = endTime - now;

      if (remainingTime <= 0) {
        // Stop the timer when the deal ends
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
    };

    // Set an interval to update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval); // Cleanup the interval on unmount
  }, []);

  return (
    <section className="ftco-section ftco-deal bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="/assets/images/prod-1.png" className="img-fluid" alt="Product" />
          </div>
          <div className="col-md-6">
            <div className="heading-section heading-section-white">
              <span className="subheading">Deal of the month</span>
              <h2 className="mb-3">Deal of the month</h2>
            </div>
            <div id="timer" className="d-flex mb-4">
              <div className="time" id="days"></div>
              <div className="time pl-4" id="hours"></div>
              <div className="time pl-4" id="minutes"></div>
              <div className="time pl-4" id="seconds"></div>
            </div>
            <div className="text-deal">
              <h2><a href="#">Nike Free RN 2019 iD</a></h2>
              <p className="price">
                <span className="mr-2 price-dc">$120.00</span>
                <span className="price-sale">$80.00</span>
              </p>
              <ul className="thumb-deal d-flex mt-4">
                <li className="img" style={{ backgroundImage: 'url(/assets/images/product-6.png)' }}></li>
                <li className="img" style={{ backgroundImage: 'url(/assets/images/product-2.png)' }}></li>
                <li className="img" style={{ backgroundImage: 'url(/assets/images/product-4.png)' }}></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheMonth;
