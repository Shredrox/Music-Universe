import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ReviewCard } from '../components/ReviewCard';

export const ProductPage = ({products, toggleCart, onAdd}) => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const product = products.find((product) => {
    if (product.id == productId) {
      return product; 
    }
  });

  useEffect(()=>{
    setReviews(product.reviews);
  }, [])
  
  const submitReview = (e) => {
    e.preventDefault();

    const id = Math.random();

    const data = {
      reviewId: id,
      content: content,
      rating: rating
    };

    onAdd(product.id, data);
    setContent('');
    setRating('');
    setReviews([...reviews, data]);
  }

  return (
    <div className='product-page'>
        <div className="product-info-container">
          <div className="product-page-product">
            <img src={product.image} alt="aaa" />
          </div>
          <div className="product-details-section">
            <div className="product-description">
              {product.description}
            </div>
            {product.name}
            {product.price}
            <button 
              className={product.inCart ? "catalog-cart-button-remove" : "catalog-cart-button" } 
              onClick={() => toggleCart(product.id)}>
                {product.inCart ? "Remove From Cart" : "Add To Cart" }
            </button>
          </div>
        </div>

        <div className="review-section">
          <div className="review-list">
            {reviews.map((review) => 
              <ReviewCard key={review.reviewId} content={review.content} rating={review.raiting}/>
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
