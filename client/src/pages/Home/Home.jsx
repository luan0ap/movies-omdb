import React, { useState, useEffect, useCallback } from 'react'

import useDebounce from 'mixins/DebounceInput'
import InputBox from 'components/common/InputBox/InputBox'
import MoviesList from 'components/Movie/List/List'
import EmptyBox from 'components/common/EmptyBox/EmptyBox'

import { getAllByName } from 'services/movies'
import LikedMoviesStorage from 'services/moviesLikedStorage'

import './Home.css'

function Home () {
  const [movieName, setMovieName] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [totalResults, setTotalResults] = useState(0)
  const [nextPage, setNextPage] = useState(2)

  const debouncedSearchTerm = useDebounce(movieName, 500)

  const handleResponse = useCallback((response, cb) => {
    const getResults = {
      error () {
        return {
          error: true,
          data: [],
          total: 0
        }
      },

      content () {
        return {
          data: response.Search.map(movie => ({ ...movie, Liked: LikedMoviesStorage.has(movie.imdbID) })),
          error: false,
          total: Number(response.totalResults)
        }
      }
    }

    const resultsType = response.Search ? 'content' : 'error'

    cb(getResults[resultsType]())
  }, [])

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsLoading(true)

        getAllByName(debouncedSearchTerm).then((response) => {
          handleResponse(response, ({ data, error, total }) => {
            setMoviesList(data)
            setHasError(error)
            setTotalResults(total)
            setNextPage(2)
          })
          setIsLoading(false)
        })
      }
    },
    [debouncedSearchTerm, handleResponse]
  )

  const handler = ({ target }) => {
    setMoviesList([])
    setTotalResults(0)
    setHasError(false)
    setMovieName(target.value)
  }

  const handleLikeMovie = (title, imdbID) => {
    LikedMoviesStorage.has(imdbID) ? LikedMoviesStorage.remove(imdbID) : LikedMoviesStorage.add({ title, imdbID })
  }

  const loadMoreMovies = () => {
    setIsLoading(true)
    getAllByName(movieName, { page: nextPage }).then((response) => {
      handleResponse(response, ({ data, error }) => {
        setMoviesList([...moviesList, ...data])
        setNextPage(nextPage + 1)
        setHasError(error)
        setIsLoading(false)
      })
    })
  }

  return (
    <main className='main-content'>
      <InputBox handlerChange={handler} val={movieName} />
      {
        movieName === ''
          ? <EmptyBox customClasses={['empty']} />
          : <MoviesList
            isLoading={isLoading}
            moviesList={moviesList}
            hasError={hasError}
            handleLike={handleLikeMovie}
            total={totalResults}
            loadMore={loadMoreMovies}
          />
      }
    </main>
  )
}

export default Home
