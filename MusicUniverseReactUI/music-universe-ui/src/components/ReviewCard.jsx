import React from 'react'

export const ReviewCard = (review) => {
  return (
    <div className='review-card'>
        {review.content}
        {review.rating}
    </div>
  )
}
