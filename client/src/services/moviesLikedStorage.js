import Storage from 'utils/localStorage'

const moviesLikedStorage = Storage('@zup/moviesLiked')

const add = (movieInfo) => {
  const moviesLikedList = moviesLikedStorage.get()
  moviesLikedStorage.set([...moviesLikedList, { ...movieInfo }])
}

const remove = (imdbIDMovie) => {
  const moviesLikedList = moviesLikedStorage.get()
  const moviesListUpdated = moviesLikedList.filter(({ imdbID }) => imdbID !== imdbIDMovie)

  moviesLikedStorage.set(moviesListUpdated)
}

const has = (id) => {
  const moviesLikedList = moviesLikedStorage.get()
  return moviesLikedList.some(({ imdbID }) => imdbID === id)
}

const getAll = () => moviesLikedStorage.get()

export default {
  remove,
  getAll,
  has,
  add
}
