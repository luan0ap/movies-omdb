import config from '../utils/config'
import objectToQueryString from '../utils/objectToQueryString'

const request = config('http://www.omdbapi.com')

export const getByName = (movieName, paramsObj = {}) => {
  const queryParams = objectToQueryString(paramsObj)

  return request((baseUrl, apiKey) => {
    return window.fetch(`${baseUrl}/?s=${movieName}&apikey=${apiKey}&${queryParams}`)
      .then(response => response.json())
  })
}

export default {}
