import React, { useState, useEffect } from 'react'
import InputBox from '../../components/common/InputBox/InputBox'
import { getByName } from '../../services/movies'

import './Home.css'
import logo from '../../assets/logos/logo.svg'

function Home () {
  const [movieName, setMovieName] = useState('')
  const [, setMoviesList] = useState([])
  const [, setIsSearching] = useState(false)

  function useDebounce (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value)
        }, delay)

        return () => {
          clearTimeout(handler)
        }
      }
    )

    return debouncedValue
  }

  const debouncedSearchTerm = useDebounce(movieName, 500)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)

        getByName(debouncedSearchTerm).then(results => {
          setIsSearching(false)
          setMoviesList(results)
        })
      }
    },
    [debouncedSearchTerm]
  )

  const handler = ({ target }) => {
    setMovieName(target.value)
  }

  return (
    <div className='main-content'>
      <header className='header-search'>
        <img src={logo} className='logo' alt='Logo Whats in' />
      </header>
      <InputBox handlerChange={handler} val={movieName} />
    </div>
  )
}

export default Home
