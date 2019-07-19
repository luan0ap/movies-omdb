import config from '../utils/config'
import objectToQueryString from '../utils/objectToQueryString'

const request = config('http://www.omdbapi.com')

export const getByName = (movieName, paramsObj = {}) => {
  const queryParams = objectToQueryString(paramsObj)

  return request((baseUrl, apiKey) => {
    return window.fetch(`${baseUrl}/?t=${movieName}&apikey=${apiKey}&${queryParams}`)
      .then(response => response.json())
  })
}
