import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useTodos } from '../hooks/useTodos'
import { filterTodos } from '../todoList.helpers'
import { CreateTodoModal } from './CreateTodoModal'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const { createTodo, todoList, removeTodo, updateTodo } = useTodos([])
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='todo-list'>
      <TextField
        name='search'
        autoComplete='off'
        autoFocus
        disabled={todoList.length === 0}
        color='primary'
        label={todoList.length === 0 ? 'No Todos To Search' : 'Search Todos'}
        onChange={({ target }) => setSearchTerm(target.value)}
      />

      <div className='todos'>
        {filterTodos(todoList, searchTerm).map(todo => (
          <TodoItem
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>

      <div className='todo-action-buttons'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setCreateModalOpen(true)}>
          Create Todo
        </Button>
      </div>

      <CreateTodoModal
        isOpen={createModalOpen}
        createTodo={createTodo}
        onClose={() => setCreateModalOpen(false)}
      />
    </div>
  )
}
