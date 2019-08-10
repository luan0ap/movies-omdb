import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

function Button ({ label, click }) {
  return (
    <button className='button' onClick={click}>
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  click: PropTypes.func.isRequired
}

export default Button
