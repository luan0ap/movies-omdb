import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import iconHeart from 'assets/icons/icon-heart-white.svg'
import iconHeartFull from 'assets/icons/icon-heart-full.svg'

import './Card.css'

function Card ({ imdbID, title, year, poster, to, isLiked, handleLike }) {
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
        <Link
          key={imdbID}
          to={to}
          className='movie-link'
        >
          <span className='title'>{title}</span><br />
          <span className='year'>{year}</span>
        </Link>
      </div>
    </div>
  )
}

export default Card
