import React from 'react'

import './Button.css'

function Button ({ label, click }) {
  return (
    <button className='button' onClick={click}>
      { label }
    </button>
  )
}

export default Button
