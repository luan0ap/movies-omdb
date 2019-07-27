import React, { useState } from 'react'

import iconHeart from 'assets/icons/icon-heart-white.svg'
import iconHeartFull from 'assets/icons/icon-heart-full.svg'

import './Card.css'

function Card ({ imdbID, title, year, poster, isLiked, handleLike }) {
  const [isCardLiked, setIsCardLiked] = useState(isLiked)
  const cardStyle = {
    background: `url(${poster}) no-repeat center`,
    'backgroundColor': '#be3232'
  }

  const handle = () => {
    setIsCardLiked(!isCardLiked)
    handleLike(title, imdbID)
  }

  return (
    <div style={cardStyle} className='card-post'>
      <div className='card-content'>
        <img
          className='icon'
          src={isCardLiked ? iconHeartFull : iconHeart}
          alt='Icon favorite movie'
          onClick={handle}
        />

        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  )
}

export default Card
