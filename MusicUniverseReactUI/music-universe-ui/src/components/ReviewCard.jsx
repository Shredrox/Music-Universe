import React from 'react'

export const ReviewCard = (review) => {
  return (
    <div>
        {review.content}
        {review.rating}
    </div>
  )
}
