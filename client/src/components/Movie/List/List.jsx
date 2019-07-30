import React from 'react'

import Grid from 'components/common/Grid/Grid'
import Card from 'components/Movie/Card/Card'
import ButtonLoadMore from 'components/common/Button/Button'

import './List.css'

function List ({ isLoading, hasError, moviesList, handleLike, loadMore, total }) {
  return (
    <section className='movies-list'>
      <Grid isLoading={isLoading}>
        {
          hasError
            ? <div className='empty'><p>Sorry! Movie not found</p></div>
            : moviesList.map(({ Title, Year, Poster, imdbID, Liked }) => (
              <Card
                key={imdbID}
                handleLike={handleLike}
                imdbID={imdbID}
                title={Title}
                year={Year}
                poster={Poster}
                isLiked={Liked}
                to={`/movie/${imdbID}`}
              />
            ))
        }
      </Grid>

      {
        total > moviesList.length && <ButtonLoadMore label='Load more' click={loadMore} />
      }
    </section>
  )
}

export default List
