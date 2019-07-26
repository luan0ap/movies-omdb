export const setStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data))
}

export const getStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name)) || []
}

const Storage = (name) => ({
  set: setStorage.bind(this, name),
  get: getStorage.bind(this, name)
})

export default Storage