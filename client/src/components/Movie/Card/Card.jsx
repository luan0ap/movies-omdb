import React from 'react'

import iconHeart from 'assets/icons/icon-heart-white.svg'
import iconHeartFull from 'assets/icons/icon-heart-full.svg'
import './Card.css'

function Card ({ title, year, poster, isLiked }) {
  const cardStyle = {
    background: `url(${poster}) no-repeat center`
  }

  return (
    <div style={cardStyle} className='card-post'>
      <div className='card-content'>
        <img className='icon' src={isLiked ? iconHeartFull : iconHeart} alt='Icon favorite movie'/>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  )
}

export default Card
