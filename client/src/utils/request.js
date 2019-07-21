const request = (url, body = {}) =>
  window.fetch(url, body)
    .then(response => response.json())

export default request
