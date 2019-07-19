const objectToQueryString = (obj = {}) =>
  Object.entries(obj).map(([k, v]) => `${k}=${v}`).join('&')

export default objectToQueryString
