import React from 'react'

import './Loading.css'

function Loading ({ customClasses }) {
  return (
    <div className={`loading-dots ${customClasses.join(' ')}`}>
      <div className='dots' />
      <div className='dots' />
      <div className='dots' />
    </div>
  )
}

export default Loading
