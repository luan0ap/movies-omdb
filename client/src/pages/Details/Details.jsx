import React from 'react'

function Detail ({ match }) {
  return (
    <p>{match.params.imdbId}</p>
  )
}

export default Detail
