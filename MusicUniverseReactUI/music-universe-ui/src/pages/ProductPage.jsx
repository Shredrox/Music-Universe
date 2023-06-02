import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ReviewCard } from '../components/ReviewCard';

export const ProductPage = ({products, toggleCart, onAdd}) => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  // async function getProduct(id) {
  //   const result = await fetch(`http://localhost:5000/products/${id}`);
  //   const data = await result.json();

  //   return data;
  // }

  // const product = getProduct(productId);
  // console.log(product);

  const product = products.find((product) => {
    if (product.id == productId) {
      return product; 
    }
  });

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
  }

  return (
    <div className='product-page'>
        {product.name}
        {product.price}
        <div className="product">
                <img className="featuredProductImg" src={product.image} alt="aaa" />
            </div>
        <button 
          className={product.inCart ? "catalog-cart-button-remove" : "catalog-cart-button" } 
          onClick={() => toggleCart(product.id)}>
          {product.inCart ? "Remove From Cart" : "Add To Cart" }
        </button>
        <br />

        <form className="review-form">
            WRITE REVIEW
            <label className='form-text' htmlFor="email">Content: </label>
            <textarea className='review-input' value={content} onChange={(e) => setContent(e.target.value)} /><br/>
            <label className='form-text' htmlFor="email">Rating: </label>
            <input className='input' value={rating} onChange={(e) => setRating(e.target.value)}/><br/>
            <button className='glow-on-hover' onClick={submitReview} type="submit" >Submit</button><br/><br/><br/>
        </form>

        <div className="review-section">
            {product.reviews.map((review) => 
                <ReviewCard key={review.reviewId} content={review.content} rating={review.raiting}/>
            )}
        </div>
    </div>
  )
}
