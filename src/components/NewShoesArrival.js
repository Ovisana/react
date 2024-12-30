import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from './CartContext'; // Import the CartContext

const NewShoesArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Using the addToCart function from CartContext

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Save products to state
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Stop the loading indicator
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
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">New Shoes Arrival</h2>
            <p>
              Explore our latest collection fetched dynamically from FakeStore API.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price.toFixed(2)}
              salePrice={null} // Use null since FakeStore API doesn't provide discount prices
              category={product.category}
              onAddToCart={() => addToCart({ ...product, quantity: 1 })} // Pass the addToCart function
              onBuyNow={() => {
                addToCart({ ...product, quantity: 1 });
                window.location.href = '/checkout'; // Redirect to checkout
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewShoesArrival;
