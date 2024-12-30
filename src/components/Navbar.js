import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CartContext'; // Import the cart context

const Navbar = () => {
  const { cartItems } = useCart(); // Get the cart items from context

  // Calculate the total quantity of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ftco_navbar ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Minishop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href="/shop">Shop</a>
                {/* <a className="dropdown-item" href="/product/:id">Single Product</a> */}
                <a className="dropdown-item" href="/cart">Cart</a>
                <a className="dropdown-item" href="/checkout">Checkout</a>
              </div>
            </li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            {/* Update the cart count dynamically */}
            <li className="nav-item cta cta-colored">
              <a href="/cart" className="nav-link">
                <span className="icon-shopping_cart"></span>[{cartCount}]
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
