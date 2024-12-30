import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext'; // Import CartProvider
// import ProductDetails from './pages/product/ProductDetails';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './components/Home';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import './assets/css/style.css';
import TopBar from './components/TopBar';
import ProductCard from './components/ProductCard';
import SingleProduct from './components/product_detail';

function App() {
  return (
    <CartProvider> {/* Wrap the entire app in CartProvider */}
      <Router>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/productcart' element={<ProductCard/>} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
