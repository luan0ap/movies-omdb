import React from 'react'
import './Grid.css'

import Loading from 'components/common/Loading/Loading'

function Grid ({ children, isLoading }) {
  return (
    <div className='grid-content'>
      {children}
      {isLoading && <Loading customClasses={['loading']} />}
    </div>
  )
}

export default Grid
