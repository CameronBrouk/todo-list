import { Todo } from './todoList.types'

// NOTE: While remote, this has a chance of creating duplicate IDS.
//       I would never use this in a production application.
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

export const searchString = (string: string, searchTerm: string) =>
  string.toLowerCase().includes(searchTerm.toLowerCase())

export const filterTodos = (todos: Todo[], searchTerm: string) =>
  todos.filter(({ title }) => searchString(title, searchTerm))
