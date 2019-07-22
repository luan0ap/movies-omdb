import React from 'react'
import './List.css'

function List ({ children }) {
  return (
    <section className='list-content'>
      {children}
    </section>
  )
}

export default List
