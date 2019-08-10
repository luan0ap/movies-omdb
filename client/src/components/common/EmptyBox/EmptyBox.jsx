import React from 'react'
import PropTypes from 'prop-types'

import IllustrationEmptyState from 'assets/illustrations/illustration-empty-state.png'
import './EmptyBox.css'

function EmptyBox ({ customClasses = [] }) {
  return (
    <section className={`empty-card ${customClasses.join(' ')}`}>
      <img className='illustration' src={IllustrationEmptyState} alt='Illustration empty state' />
      <p className='intro'>Don't know what to <br /> search?</p>
      <p className='offer'>Here's an offer you can't refuse</p>
    </section>
  )
}

EmptyBox.propTypes = {
  customClasses: PropTypes.arrayOf(PropTypes.string)
}

export default EmptyBox
