import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { get } from 'services/movies'
import LikedMoviesStorage from 'services/moviesLikedStorage'

import Chip from 'components/common/Chip/Chip'
import CardListLite from 'components/common/CardListLite/CardListLite'

import './Details.css'
import IconArrowWhite from 'assets/icons/icon-arrow-white.svg'
import LogoImdbIcon from 'assets/logos/logo-imdb.svg'
import LogoRottenTomatoes from 'assets/logos/logo-rotten-tomatoes.svg'
import IconHeartFull from 'assets/icons/icon-heart-full.svg'
import IconHeartEmpty from 'assets/icons/icon-heart-white.svg'

function Detail ({ match }) {
  const [ isLiked, setIsLiked ] = useState(false)
  const [ isLoading, setisLoading ] = useState(true)
  const [ imdbID ] = useState(match.params.imdbID)
  const [ movieData, setMovieData ] = useState({})

  useEffect(() => {
    const isLiked = LikedMoviesStorage.has(imdbID)
    setIsLiked(isLiked)

    get(imdbID, { plot: 'full' }).then((response) => {
      setMovieData(response)
      setisLoading(false)
    })
  }, [setIsLiked, imdbID])

  const likedMovieProps = (liked) => {
    if (liked) {
      return {
        icon: IconHeartFull,
        bgIcon: '#ff0026',
        bgLabel: '#ff0026',
        label: 'Added'
      }
    }

    return {
      icon: IconHeartEmpty,
      label: 'Add to favorites'
    }
  }

  const handleLikeMovie = () => {
    setIsLiked(!isLiked)
    LikedMoviesStorage.has(imdbID) ? LikedMoviesStorage.remove(imdbID) : LikedMoviesStorage.add({ title: movieData.Title, imdbID })
  }

  return (
    <section className='movie-about'>
      {
        !isLoading && <>
          <article className='movie-info'>
            <Link to='/' className='back-home'>
              <img className='icon' src={IconArrowWhite} alt='Icon back to home' />
            </Link>

            <div className='movie-time'>
              <span className='duration -separator_disc'>{movieData.Runtime}</span>
              <span className='year -separator_disc'>{movieData.Year}</span>
              <span className='right -separator_disc'>R</span>
            </div>

            <h1 className='title'>{movieData.Title}</h1>

            <div className='movie-extra'>
              <Chip customClasses={['extra']} icon={LogoImdbIcon} bgIcon='#ffa200' label={movieData.imdbRating} />
              <Chip customClasses={['extra']} icon={LogoRottenTomatoes} bgIcon='#ff0026' label={movieData.Ratings[0].Value} />
              <Chip customClasses={['extra']} onClick={handleLikeMovie} {...likedMovieProps(isLiked)} />
            </div>

            <div className='movie-description'>
              <h4 className='title'>Plot</h4>
              <p>
                {movieData.Plot}
              </p>
            </div>

            <div className='movie-members'>
              <CardListLite title='Cast' list={movieData.Actors.split(',')} />
              <CardListLite title='Genre' list={movieData.Genre.split(',')} />
              <CardListLite title='Director' list={movieData.Director.split(',')} />
            </div>
          </article>
          <article className='movie-poster'>
            <img className='poster' src={movieData.Poster} alt={`Poster from movie ${movieData.Title}`} />
          </article>
      </>
      }
    </section>
  )
}

export default Detail
