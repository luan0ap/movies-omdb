import React, { useState, useEffect } from 'react'

import useDebounce from '../../mixins/DebounceInput'
import InputBox from '../../components/common/InputBox/InputBox'
import MoviesList from '../../components/Movie/List/List'
import Card from '../../components/Movie/Card/Card'

import { getByName } from '../../services/movies'

import './Home.css'
import logo from '../../assets/logos/logo.svg'

function Home () {
  const [movieName, setMovieName] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  const debouncedSearchTerm = useDebounce(movieName, 500)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)

        getByName(debouncedSearchTerm).then(results => {
          setIsSearching(false)

          const data = results.Error ? [] : results.Search

          setMoviesList(data)
        })
      }
    },
    [debouncedSearchTerm]
  )

  const handler = ({ target }) => {
    setMovieName(target.value)
  }

  return (
    <div className='app-content'>
      <header className='header-search'>
        <img src={logo} className='logo' alt='Logo Whats in' />
      </header>

      <main className='main-content'>
        <InputBox handlerChange={handler} val={movieName} />
        <MoviesList>
          {
            moviesList.map(({ Title, Year, Poster, imdbID }) => (
              <Card key={imdbID} title={Title} year={Year} poster={Poster} />
            ))
          }
        </MoviesList>
      </main>
    </div>
  )
}

export default Home
