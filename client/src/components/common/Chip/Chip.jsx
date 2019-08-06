import React from 'react'

import './Chip.css'

function Chip ({ bgIcon, bgLabel, icon, label, onClick, customClasses }) {
  const styleBg = (color, borderSide) =>
    color ? { backgroundColor: color } : { border: '1px solid #fff', [borderSide]: 'none' }

  const styleCursor = hasEvent =>
    hasEvent && { cursor: 'pointer' }

  return (
    <div className={`chip-box ${customClasses.join(' ')}`} style={styleCursor(onClick)} onClick={onClick}>
      <div className='icon-box' style={styleBg(bgIcon, 'borderRight')}>
        <img className='icon' src={icon} alt='Icon chip' />
      </div>
      <div className='label-box' style={styleBg(bgLabel, 'borderLeft')}>
        <span className='label'>{label}</span>
      </div>
    </div>
  )
}

export default Chip
