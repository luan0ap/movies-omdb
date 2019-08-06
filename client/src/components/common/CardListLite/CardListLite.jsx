import React from 'react'

import './CardListLite.css'

function CardListLite ({ title, list = ['hello', 'world', 'people'] }) {
  return (
    <div className='card-list'>
      <h4 className='title'>{ title }</h4>
      <ul className='list-item'>
        {
          list.map(txt => (<li className='item'>{txt}</li>))
        }
      </ul>
    </div>
  )
}

export default CardListLite
