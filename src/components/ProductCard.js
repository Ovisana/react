import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductCard = ({ id }) => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

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

  const handleAddToCart = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (product) {
      addToCart({ id: product.id, title: product.title, price: product.price, image: product.image });
      alert(`${product.title} has been added to your cart!`);
    }
  };

  const handleBuyNow = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (product) {
      addToCart({ id: product.id, title: product.title, price: product.price, image: product.image });
      navigate('/checkout', { state: { product } }); // Navigate to checkout with product details
    }
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 d-flex">
      <div className="product d-flex flex-column">
        <a href={`/product/${id}`} className="img-prod">
          <img className="img-fluid" src={product.image} alt={product.title} />
          <div className="overlay"></div>
        </a>
        <div className="text py-3 pb-4 px-3">
          <div className="d-flex">
            <div className="cat">
              {/* <span>{category}</span> */}
            </div>
            <div className="rating">
              <p className="text-right mb-0">
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
              </p>
            </div>
          </div>
          <h3><a href="#">{product.title}</a></h3>
          <div className="pricing">
            <p>${product.price}</p>
          </div>
          <p className="bottom-area d-flex px-3">
            <a href="/" onClick={handleAddToCart} className="add-to-cart text-center py-2 mr-1">
              <span>Add to cart <i className="ion-ios-add ml-1"></i></span>
            </a>
            <a href="/" onClick={handleBuyNow} className="buy-now text-center py-2">
              Buy now<span><i className="ion-ios-cart ml-1"></i></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
