import React from 'react'

import './Chip.css'

function Chip ({ bgIcon, bgLabel, icon, label }) {
  const style = color =>
    color ? { backgroundColor: color } : { border: '1px solid #fff' }

  return (
    <div className='chip-box'>
      <div className='icon-box' style={{ ...style(bgIcon), borderRight: 'none' }}>
        <img className='icon' src={icon} alt='Icon chip' />
      </div>
      <div className='label-box' style={{ ...style(bgLabel), borderLeft: 'none' }}>
        <span className='label'>{label}</span>
      </div>
    </div>
  )
}

export default Chip
