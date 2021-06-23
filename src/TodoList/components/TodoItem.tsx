import React from 'react'
import { Todo } from '../todoList.types'
import { Checkbox, IconButton, Icon } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { updateTypePredicateNodeWithModifier } from 'typescript'

type Props = {
  todo: Todo
  removeTodo: (id: string) => void
  updateTodo: (id: string, todo: Partial<Omit<Todo, 'id'>>) => void
}

export const TodoItem = ({ todo, removeTodo, updateTodo }: Props) => {
  const toggleTodo = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed })
  }

  return (
    <div className='todo-item'>
      <Checkbox
        color='primary'
        checked={todo.completed}
        onChange={toggleTodo}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <p>{todo.title}</p>

      <div className='remove-icon'>
        <IconButton color='secondary' onClick={() => removeTodo(todo.id)}>
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  )
}
