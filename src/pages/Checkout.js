import React, { useState, useEffect } from 'react';
import { useCart } from '../components/CartContext';

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const [total, setTotal] = useState(0);
  const [showPayPal, setShowPayPal] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  // Calculate subtotal, delivery, discount, and total
  const subtotal = cartItems.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);
  const delivery = 5.99;
  const discount = 0;
  const calculatedTotal = subtotal + delivery - discount;

  useEffect(() => {
    setTotal(calculatedTotal);
  }, [cartItems]);

  const handlePaymentMethodChange = (e) => {
    if (e.target.value === 'paypal') {
      setShowPayPal(true);
      loadPayPalScript();
    } else {
      setShowPayPal(false);
    }
  };

  const loadPayPalScript = () => {
    if (!window.paypal) {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=Ab0a9qTYxEFUOzX231mh33jH6mkT1m_Ukc2Mx7VLWJiF3iGT9dsOmQxzM67LyWVXGJjLOLXesBMgsGgr&currency=USD`;
      script.async = true;

      script.onload = () => {
        renderPayPalButton();
      };

      document.body.appendChild(script);
    } else {
      renderPayPalButton();
    }
  };

  const renderPayPalButton = () => {
    if (window.paypal && !paypalLoaded) {
      setPaypalLoaded(true);
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: total.toFixed(2) },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const details = await actions.order.capture();
          console.log('Transaction completed:', details);

          // Clear the cart after successful payment
          setCartItems([]);
          alert('Payment Successful! Thank you for your purchase.');
        },
        onError: (err) => {
          console.error('PayPal Checkout Error:', err);
        },
      }).render('#paypal-button-container');
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <form className="billing-form">
              <h3 className="mb-4 billing-heading">Billing Details</h3>
              {/* Billing Form */}
              <div className="row align-items-end">
                {/* Form fields for user information */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                {/* Additional fields */}
              </div>
            </form>

            <div className="row mt-5 pt-3 d-flex">
              {/* Cart Total */}
              <div className="col-md-6 d-flex">
                <div className="cart-detail cart-total bg-light p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Cart Total</h3>
                  <p>
                    <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
                  </p>
                  <p>
                    <span>Delivery</span> <span>${delivery.toFixed(2)}</span>
                  </p>
                  <p>
                    <span>Discount</span> <span>-${discount.toFixed(2)}</span>
                  </p>
                  <hr />
                  <p className="d-flex total-price">
                    <span>Total</span> <span>${total.toFixed(2)}</span>
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="col-md-6">
                <div className="cart-detail bg-light p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Payment Method</h3>
                  <label>
                    <input type="radio" name="payment" value="paypal" onChange={handlePaymentMethodChange} />
                    PayPal
                  </label>

                  {showPayPal && <div id="paypal-button-container" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
