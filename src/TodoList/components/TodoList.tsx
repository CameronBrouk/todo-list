import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const { clearTodos, createTodo, todoList, removeTodo, updateTodo, getTodo } =
    useTodos([])

  const toggleCompleted = (id: string) => {
    const todo = getTodo(id)
    if (!todo) return
    updateTodo(id, {
      completed: !todo.completed,
    })
  }

  return (
    <div className='todo-list'>
      {todoList.map((todo, i) => (
        <div key={todo.id} className='todo-item'>
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        </div>
      ))}
    </div>
  )
}
