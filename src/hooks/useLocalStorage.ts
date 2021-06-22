import { useEffect, useState } from 'react'

const getFromLocalStorage = async <T>(key: string, defaultValue: T) => {
  await null
  const value = window.localStorage.getItem(key)
  if (!value) return defaultValue
  return JSON.parse(value)
}

const setInLocalStorage = async <T>(key: string, value: T) => {
  await null
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState(defaultValue)

  useEffect(() => {
    getFromLocalStorage(key, defaultValue).then(setStoredValue)
  }, [])

  const setValue = (setterFn: (previousValue: T) => T) => {
    setStoredValue(oldValue => {
      setInLocalStorage(key, setterFn(oldValue)).then()
      return setterFn(oldValue)
    })
  }

  return { storedValue, setValue }
}
