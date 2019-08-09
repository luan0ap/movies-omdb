import config from 'utils/config'
import request from 'utils/request'
import objectToQueryString from 'utils/objectToQueryString'

const http = config('http://www.omdbapi.com')

export const getAllByName = (movieName, paramsObj = {}) => {
  const queryParams = objectToQueryString(paramsObj)

  return http((baseUrl, apiKey) =>
    request(`${baseUrl}/?s=${movieName}&apiKey=${apiKey}&${queryParams}`))
}

export const get = (id, paramsObj = {}) => {
  const queryParams = objectToQueryString(paramsObj)

  return http((baseUrl, apiKey) =>
    request(`${baseUrl}/?i=${id}&apiKey=${apiKey}&${queryParams}`))
}

export default {}
