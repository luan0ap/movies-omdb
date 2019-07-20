const API_KEY = '2285d1f1'

const config = (baseUrl = '') => cb => cb(baseUrl, API_KEY)

export default config
