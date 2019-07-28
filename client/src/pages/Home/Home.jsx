import React, { useState, useEffect } from 'react'

import useDebounce from 'mixins/DebounceInput'
import InputBox from 'components/common/InputBox/InputBox'
import MoviesList from 'components/Movie/List/List'
import Card from 'components/Movie/Card/Card'
import EmptyBox from 'components/common/EmptyBox/EmptyBox'

import { getAllByName } from 'services/movies'
import LikedMoviesStorage from 'services/moviesLikedStorage'

import './Home.css'
import logo from 'assets/logos/logo.svg'

function Home () {
  const [movieName, setMovieName] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const debouncedSearchTerm = useDebounce(movieName, 500)

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsLoading(true)

        getAllByName(debouncedSearchTerm).then((results) => {
          const handleResults = {
            error () {
              setHasError(true)
              setMoviesList([])
            },

            content () {
              setHasError(false)
              setMoviesList(results.Search.map(movie => ({ ...movie, Liked: LikedMoviesStorage.has(movie.imdbID) })))
            }
          }

          const resultsType = results.Search ? 'content' : 'error'

          handleResults[resultsType]()
          setIsLoading(false)
        })
      }
    },
    [debouncedSearchTerm]
  )

  const handler = ({ target }) => {
    setMoviesList([])
    setHasError(false)
    setMovieName(target.value)
  }

  const handleLikeMovie = (title, imdbID) => {
    LikedMoviesStorage.has(imdbID) ? LikedMoviesStorage.removeByImdbId(imdbID) : LikedMoviesStorage.add({ title, imdbID })
  }

  return (
    <div className='app-content'>
      <header className='header-search'>
        <img src={logo} className='logo' alt='Logo Whats in' />
      </header>

      <main className='main-content'>
        <InputBox handlerChange={handler} val={movieName} />
        {
          movieName === ''
            ? <EmptyBox customClasses={['empty']} />
            : <MoviesList isLoading={isLoading}>
              {
                hasError
                  ? <div className='notfound'><p>Sorry! Movie not found</p></div>
                  : moviesList.map(({ Title, Year, Poster, imdbID, Liked }) => (
                    <Card
                      key={imdbID}
                      handleLike={handleLikeMovie}
                      imdbID={imdbID}
                      title={Title}
                      year={Year}
                      poster={Poster}
                      isLiked={Liked}
                    />
                  ))
              }
            </MoviesList>
        }
      </main>
    </div>
  )
}

export default Home
