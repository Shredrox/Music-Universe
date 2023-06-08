import React from 'react'
import userIcon from '../assets/userIcon1.png'

export function ReviewCard({review}){

  return (
    <div className='review-card'>
        <p className='user-display'> <img className='user-icon' src={userIcon} alt="" /> {review.reviewerUsername}</p>
        <p>{review.content}</p>
        <label className='rating-label'>Rating: {review.rating}</label> 
    </div>
  )
}
