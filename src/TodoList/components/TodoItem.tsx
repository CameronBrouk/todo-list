import React from 'react'
import { Todo as Todo } from '../todoList.types'

type Props = {
  todo: Todo
  removeTodo: (id: string) => void
  toggleCompleted: (id: string) => void
}

export const TodoItem = (props: Props) => {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
