import React, { useState } from 'react'
import { Button, TextField, Modal } from '@material-ui/core'
import { Todo } from '../todoList.types'
import { Container } from '@material-ui/core'

type Props = {
  isOpen: boolean
  onClose: () => void
  createTodo: (todo: Omit<Todo, 'id'>) => void
}

export const CreateTodoModal = (props: Props) => {
  const [formState, setFormState] = useState({ title: '' })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    props.createTodo({
      completed: false,
      title: formState.title,
    })
    props.onClose()
  }

  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby='create-todo-modal'
      aria-describedby='create-todo-modal'>
      <Container maxWidth='xs'>
        <form className='create-modal' onSubmit={onSubmit}>
          <h1>Create a Todo Item</h1>

          <TextField
            name='title'
            label='Todo'
            autoComplete='off'
            autoFocus
            placeholder='describe your todo'
            required
            onChange={e =>
              setFormState(formState => ({
                ...formState,
                title: e.target.value,
              }))
            }
          />

          <div className='create-todo'>
            <Button type='submit' variant='contained' color='primary'>
              Create Todo
            </Button>
          </div>
        </form>
      </Container>
    </Modal>
  )
}
