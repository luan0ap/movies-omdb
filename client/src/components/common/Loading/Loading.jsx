import React from 'react'
import PropTypes from 'prop-types'

import './Loading.css'

function Loading ({ customClasses = [] }) {
  return (
    <div className={`loading-dots ${customClasses.join(' ')}`}>
      <div className='dots' />
      <div className='dots' />
      <div className='dots' />
    </div>
  )
}

Loading.propTypes = {
  customClasses: PropTypes.arrayOf(PropTypes.string)
}

export default Loading
