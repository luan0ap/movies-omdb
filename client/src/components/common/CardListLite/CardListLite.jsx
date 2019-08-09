import React from 'react'

import './CardListLite.css'

function CardListLite ({ title, list = [] }) {
  return (
    <div className='card-list'>
      <h4 className='title'>{ title }</h4>
      <ul className='list-item'>
        {
          list.map((txt, index) => (<li key={index} className='item'>{txt}</li>))
        }
      </ul>
    </div>
  )
}

export default CardListLite
