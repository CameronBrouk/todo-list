import React from 'react'
import { useTodos } from '../hooks/useTodos'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const { clearTodos, createTodo, todoList, removeTodo, updateTodo } = useTodos(
    [],
  )

  return (
    <div className='todo-list'>
      {todoList.map((todo, i) => (
        <div key={todo.id} className='todo-item'>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  )
}
