import React from 'react'

export const ReviewCard = (review) => {

  return (
    <div className='review-card'>
        <p>{review.content}</p>
        <label className='rating-label'>Rating: {review.rating}</label> 
    </div>
  )
}
