import React from 'react';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  // Remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle quantity change in the cart
  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  // Calculate subtotal, delivery, discount, and total
  const subtotal = cartItems.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);
  const delivery = 5.99; // You can change this value as needed
  const discount = 0;    // Set this to the discount amount if applicable
  const total = subtotal + delivery - discount;

  return (
    <section className="ftco-section ftco-cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cart-list">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Your cart is empty
                      </td>
                    </tr>
                  ) : (
                    cartItems.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="image-prod">
                          <div className="img" style={{ backgroundImage: `url(${item.image})` }}></div>
                        </td>
                        <td>
                          <h3>{item.title}</h3>
                        </td>
                        <td>${item.salePrice || item.price}</td>
                        <td>
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                          />
                        </td>
                        <td>
                          ${((item.salePrice || item.price) * item.quantity).toFixed(2)}
                        </td>
                        <td>
                          <button onClick={() => handleRemoveItem(item.id)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="row justify-content-start">
            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </p>
              </div>

              <p className="text-center">
                <a href="/checkout" className="btn btn-primary py-3 px-4">
                  Proceed to Checkout
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cart;
