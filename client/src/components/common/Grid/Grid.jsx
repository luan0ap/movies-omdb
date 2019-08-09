import React from 'react'
import './Grid.css'

function Grid ({ children }) {
  return (
    <div className='grid-content'>
      {children}
    </div>
  )
}

export default Grid
