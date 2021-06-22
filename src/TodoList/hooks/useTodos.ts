import { createId } from '../todoList.helpers'
import { Todo } from '../todoList.types'
import { useLocalStorage } from './useLocalStorage'

export const useTodos = (defaultValue: Todo[]) => {
  const { storedValue: todoList, setValue: setTodoList } = useLocalStorage(
    'todos',
    defaultValue,
  )

  const removeTodo = (id: string) => {
    setTodoList(prevList => prevList.filter(todo => todo.id !== id))
  }

  const createTodo = (todo: Omit<Todo, 'id'>) => {
    setTodoList(prevList => [...prevList, { id: createId(), ...todo }])
  }

  const updateTodo = (
    id: string,
    newTodo: Partial<Omit<Todo, 'id' | 'completed'>>,
  ) => {
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

  return { todoList, removeTodo, createTodo, updateTodo, clearTodos }
}
