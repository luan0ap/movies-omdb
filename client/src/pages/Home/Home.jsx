import React, { useState, useEffect } from 'react'

import useDebounce from 'mixins/DebounceInput'
import InputBox from 'components/common/InputBox/InputBox'
import MoviesList from 'components/Movie/List/List'
import Card from 'components/Movie/Card/Card'
import EmptyBox from 'components/common/EmptyBox/EmptyBox'

import { getAllByName } from 'services/movies'

import './Home.css'
import logo from 'assets/logos/logo.svg'

function Home () {
  const [movieName, setMovieName] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const debouncedSearchTerm = useDebounce(movieName, 500)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsLoading(true)

        getAllByName(debouncedSearchTerm).then(results => {
          setIsLoading(false)

          const data = results.Error ? [] : results.Search

          setMoviesList(data)
        })
      }
    },
    [debouncedSearchTerm]
  )

  const handler = ({ target }) => {
    setMoviesList([])
    setMovieName(target.value)
  }

  return (
    <div className='app-content'>
      <header className='header-search'>
        <img src={logo} className='logo' alt='Logo Whats in' />
      </header>

      <main className='main-content'>
        <InputBox handlerChange={handler} val={movieName} />
        {
          movieName === '' || moviesList.length === 0
          ? <EmptyBox customClasses={['empty']} />
          : <MoviesList isLoading={isLoading}>
            {
              moviesList.map(({ Title, Year, Poster, imdbID }) => (
                <Card key={imdbID} title={Title} year={Year} poster={Poster} isLiked={true}/>
              ))
            }
          </MoviesList>
        }
      </main>
    </div>
  )
}

export default Home
