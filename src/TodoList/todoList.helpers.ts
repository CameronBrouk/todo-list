export const createId = () => Math.random().toString(16).slice(2)

export const getFromLocalStorage = async <T>(key: string, defaultValue: T) => {
  await null
  const value = window.localStorage.getItem(key)
  if (!value) return defaultValue
  return JSON.parse(value)
}

export const setInLocalStorage = async <T>(key: string, value: T) => {
  await null
  window.localStorage.setItem(key, JSON.stringify(value))
}
