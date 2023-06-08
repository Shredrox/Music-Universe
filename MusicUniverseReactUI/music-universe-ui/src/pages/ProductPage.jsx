import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ReviewCard } from '../components/ReviewCard';
import { useNavigate } from "react-router-dom";

export function ProductPage({toggleCart, onAdd}){
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [showCartMsg, setShowCartMsg] = useState(false);
  const [adminButtons, showAdminButtons] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const fetchProduct = async (id) => {
    const result = await fetch(`http://localhost:5000/products/${productId}`);
    const data = await result.json();
    return data;
  }

  const getProduct = async () => {
    const product = await fetchProduct();

    setProduct(product);
    setReviews(product.reviews);
    setIsLoading(false);
  }

  const getUser = async () =>{
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(user !== null && user !== undefined){
      if(user.role === "admin"){
        showAdminButtons(true);
      }
    }
  }

  useEffect(() => {
    getProduct();
    getUser();
  }, [])

  function changeQuantity(sign){
    if(sign === '+'){
        setQuantity(quantity+1);
    }
    else if(sign === '-' && quantity > 0){
        setQuantity(quantity-1);
    }
  }

  async function deleteProduct(){
    const result = await fetch(`http://localhost:5000/products/${product.id}`, {
      method: "DELETE", 
      headers: {
        "content-type": "application/json"
      }
    });

    navigate('/catalog');
  }

  function toggleCartMsg(){
    setShowCartMsg(true);
    setTimeout(() =>{
      setShowCartMsg(false);
    }, 3000);
  }

  const submitReview = async (e) => {
    e.preventDefault();

    const id = Math.random();
    let name = 'Anonymous';

    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(user !== undefined && user !== null){
      name = user.name;
    }

    const data = {
      reviewerUsername: name,
      reviewId: id,
      content: content,
      rating: rating
    };

    onAdd(product.id, data);
    setContent('');
    setRating('');
    setReviews([...reviews, data]);
  }

  if(isLoading) return 'loading'

  return (
    <div className='product-page'>
        <div className="product-info-container">
          <div className="product-page-product">
            {adminButtons &&
            <div className='admin-bar'>
              <button onClick={() => navigate(`/edit/product/${product.id}`)} className="catalog-cart-button" > Edit</button>
              <button className='delete-product-button' onClick={deleteProduct}> Delete</button>
            </div>
            }
            <img src={product.image} alt="aaa" />
          </div>
          <div className="product-details-section">
            <div className="product-description">
              {product.description}
            </div>
            <label>{product.name}</label>
            Price: ${product.price}
            <div className="add-to-cart-container">
                <div className="quantity-container">
                    {quantity}
                    <div className="quantity-buttons-container">
                        <button onClick={() => { changeQuantity('+')}} className="quantity-button">+</button>
                        <button onClick={() => { changeQuantity('-')}} className="quantity-button">-</button>
                    </div>
                </div>
                <button 
                  className="catalog-cart-button" 
                  disabled={localStorage.getItem('loggedInUser') === null || quantity === 0 }
                  onClick={() =>{toggleCart(product.id, quantity); setQuantity(0); toggleCartMsg(); } }>
                  Add To Cart 
                </button>
                {showCartMsg &&
                <div className="add-to-cart-msg">
                  Added To Cart!
                </div>
                }
            </div>
          </div>
        </div>

        <div className="review-section">
          <div className="review-list">
            Reviews:
            {reviews.length == 0 && <h3>No reviews for this product.</h3>}
            {reviews.map((review) => 
              <ReviewCard key={review.reviewId} review={review}/>
            )}
          </div>
          
          <form className="review-form">
            WRITE REVIEW
            <label className='form-text' htmlFor="email">Content: </label>
            <textarea className='review-input' value={content} onChange={(e) => setContent(e.target.value)} /><br/>
            <label className='form-text' htmlFor="email">Rating: </label>
            <input className='input' value={rating} onChange={(e) => setRating(e.target.value)}/><br/>
            <button className='glow-on-hover' onClick={submitReview} type="submit" >Submit</button><br/><br/><br/>
          </form>
        </div>
    </div>
  )
}
