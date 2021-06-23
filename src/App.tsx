import React from 'react'
import { Container } from '@material-ui/core'
import { TodoList } from './TodoList/components/TodoList'

function App() {
  return (
    <div>
      <header className='app-header'>
        <h1>Todo App</h1>
      </header>

      <Container maxWidth='sm'>
        <TodoList />
      </Container>
    </div>
  )
}

export default App
