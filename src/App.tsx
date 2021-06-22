import React from 'react'
import { Container } from '@material-ui/core'
import { TodoList } from './TodoList/components/TodoList'

function App() {
  return (
    <div>
      <header>
        <h1>Drive Social Media Interview - TODO App</h1>
      </header>

      <Container maxWidth='sm'>
        <TodoList />
      </Container>
    </div>
  )
}

export default App
