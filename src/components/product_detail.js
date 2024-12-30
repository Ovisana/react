import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product data');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === 'increase' ? Math.min(prev + 1, 100) : Math.max(prev - 1, 1)
    );
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
      });
      alert(`${product.title} added to your cart!`);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
      });
      navigate('/checkout', { state: { product } });
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <img src={product.image} className="img-fluid" alt={product.title} />
          </div>
          <div className="col-lg-6 product-details pl-md-5">
            <h3>{product.title}</h3>
            <p className="price"><span>${product.price}</span></p>
            <p>{product.description}</p>
            <div className="input-group col-md-6 d-flex mb-3">
              <button
                type="button"
                className="quantity-left-minus btn"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <input
                type="text"
                className="quantity form-control input-number"
                value={quantity}
                readOnly
              />
              <button
                type="button"
                className="quantity-right-plus btn"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
            <p>80 pieces available</p>
            <p className="bottom-area d-flex">
              <button onClick={handleAddToCart} className="btn btn-primary mr-2">
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="btn btn-secondary">
                Buy Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
