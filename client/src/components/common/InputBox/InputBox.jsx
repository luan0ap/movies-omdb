import React from 'react'
import './InputBox.css'
import searchIcon from '../../../assets/icons/icon-magnifier-disabled.svg'

function InputBox ({ handlerChange, val }) {
  return (
    <>
      <div className='search-container'>
        <div className='icon-search'>
          <img src={searchIcon} className='icon' alt='Icon search' />
        </div>

        <input
          onChange={handlerChange}
          className='input'
          type='text'
          placeholder='Search movies'
          value={val}
          autoFocus
          required
        />
      </div>
    </>
  )
}

export default InputBox
