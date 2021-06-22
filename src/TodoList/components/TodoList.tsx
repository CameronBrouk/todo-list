import { Button, TextField, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import { useTodos } from '../hooks/useTodos'
import { CreateTodoModal } from './CreateTodoModal'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const { clearTodos, createTodo, todoList, removeTodo, updateTodo, getTodo } =
    useTodos([])

  const [createModalOpen, setCreateModalOpen] = useState(false)

  const toggleCompleted = (id: string) => {
    const todo = getTodo(id)
    if (!todo) return
    updateTodo(id, {
      completed: !todo.completed,
    })
  }

  return (
    <div className='todo-list'>
      <TextField name='search' autoComplete='off' label='Search Todos' />

      {todoList.map((todo, i) => (
        <div key={todo.id} className='todo-item'>
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        </div>
      ))}

      <div className='todo-action-buttons'>
        <Button variant='outlined' onClick={() => setCreateModalOpen(true)}>
          Create Todo
        </Button>
        <Button variant='outlined'>Clear Todos</Button>
      </div>

      <CreateTodoModal
        isOpen={createModalOpen}
        createTodo={createTodo}
        onClose={() => setCreateModalOpen(false)}
      />
    </div>
  )
}
