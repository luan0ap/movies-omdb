import React from 'react'

import './Card.css'

function Card ({ title, year, poster }) {
  const style = {
    background: `url(${poster}) no-repeat center`
  }

  return (
    <div style={style} className='card-post'>

      <div className='card-content'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  )
}

export default Card