import { useEffect, useState } from 'react'
import { getFromLocalStorage, setInLocalStorage } from '../todoList.helpers'

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
