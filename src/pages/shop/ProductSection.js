// ProductSection.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import Sidebar from './Sidebar';
// import { useCart } from '../../Context/CartContext';

const ProductSection = () => {
  // const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading products...</p>;
  }

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-10 order-md-last">
            <div className="row">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price.toFixed(2)}
                  category={product.category}
                  salePrice={null} // FakeStore API doesn't provide sale prices
                />
              ))}
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
