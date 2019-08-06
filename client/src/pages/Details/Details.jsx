import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Chip from 'components/common/Chip/Chip'

import './Details.css'
import IconArrowWhite from 'assets/icons/icon-arrow-white.svg'
import LogoImdbIcon from 'assets/logos/logo-imdb.svg'
import LogoRottenTomatoes from 'assets/logos/logo-rotten-tomatoes.svg'
import IconHeartFull from 'assets/icons/icon-heart-full.svg'

function Detail ({ match }) {
  const [ isLiked, setIsLiked ] = useState({})

  const likedMovieProps = (liked) => {
    if (liked) {
      return {
        customClasses: ['extra'],
        icon: IconHeartFull,
        bgIcon: '#ff0026',
        bgLabel: '#ff0026',
        label: 'Added'
      }
    }

    return {
      customClasses: ['extra'],
      icon: IconHeartFull,
      bgIcon: '',
      bgLabel: '',
      label: 'Add to favorites'
    }
  }

  const handleLikeMovie = (title, imdbID) => {
    setIsLiked(!isLiked)
    // LikedMoviesStorage.has(imdbID) ? LikedMoviesStorage.remove(imdbID) : LikedMoviesStorage.add({ title, imdbID })
  }

  return (
    <section className='movie-about'>
      <article className='movie-info'>
        <Link to='/' className='back-home'>
          <img className='icon' src={IconArrowWhite} alt='Icon back to home' />
        </Link>

        <div className='movie-time'>
          <span className='duration -separator_disc'>86 min</span>
          <span className='year -separator_disc'>2014</span>
          <span className='right -separator_disc'>R</span>
        </div>

        <h1 className='title'>Movie title here</h1>

        <div className='movie-extra'>
          <Chip customClasses={['extra']} icon={LogoImdbIcon} bgIcon='#ffa200' label='76%' />
          <Chip customClasses={['extra']} icon={LogoRottenTomatoes} bgIcon='#ff0026' label='7.6/10' />
          <Chip onClick={handleLikeMovie} {...likedMovieProps(isLiked)} />
        </div>

        <div className='movie-description'>
          <h4 className='-'>Plot</h4>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </article>
      <article className='movie-poster' />
    </section>
  )
}

export default Detail
