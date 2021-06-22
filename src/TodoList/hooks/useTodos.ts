import { createId } from '../todoList.helpers'
import { Todo } from '../todoList.types'
import { useLocalStorage } from './useLocalStorage'

export const useTodos = (defaultValue: Todo[]) => {
  const { storedValue: todoList, setValue: setTodoList } = useLocalStorage(
    'todos',
    defaultValue,
  )

  const getTodo = (id: string) =>
    todoList.reduce((desiredTodo, currentTodo) => {
      if (desiredTodo) return desiredTodo // if the todo has been found, return accumulater
      if (id === currentTodo.id) return currentTodo // if currentTodo is the todo we want, set accumulater
      return null // if we haven't found tod and current Todo is not the desired todo, return null
    }, {} as Todo | null)

  const removeTodo = (id: string) => {
    setTodoList(prevList => prevList.filter(todo => todo.id !== id))
  }

  const createTodo = (todo: Omit<Todo, 'id'>) => {
    setTodoList(prevList => [...prevList, { id: createId(), ...todo }])
  }

  const updateTodo = (id: string, newTodo: Partial<Omit<Todo, 'id'>>) => {
    setTodoList(prevList =>
      prevList.map(todo => {
        if (todo.id === id) return { ...todo, ...newTodo }
        return todo
      }),
    )
  }

  const clearTodos = () => {
    setTodoList(_ => [])
  }

  return { todoList, removeTodo, createTodo, updateTodo, clearTodos, getTodo }
}
