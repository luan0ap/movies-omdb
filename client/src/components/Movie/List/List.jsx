import React from 'react'
import './List.css'

import Loading from 'components/common/Loading/Loading'

function List ({ children, isLoading }) {
  return (
    <section className='list-content'>
      {isLoading ? <Loading customClasses={['loading']} /> : children}
    </section>
  )
}

export default List
