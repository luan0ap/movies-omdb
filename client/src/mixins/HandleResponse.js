import { useCallback } from 'react'
import LikedMoviesStorage from 'services/moviesLikedSotrage'

const HandleResponse = useCallback((response, cb) => {
  const handleResults = {
    error: {
      error: true,
      data: [],
      total: 0
    },

    content: {
      data: response.Search.map(movie => ({ ...movie, Liked: LikedMoviesStorage.has(movie.imdbID) })),
      error: false,
      total: Number(response.totalResults)
    }
  }

  const resultsType = response.Search ? 'content' : 'error'

  cb(handleResults[resultsType])
}, [])

export default HandleResponse
