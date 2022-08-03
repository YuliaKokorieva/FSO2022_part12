import React from 'react'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('<Todo />', () => {
  beforeEach(()=> {
    const todo = {
      id: 'testid',
      text: 'test todo',
      done: false
    }
  render(<Todo todo = {todo}/>)
  })

  test('renders todo', async ()=> {
    const element = await screen.findByText('test todo')
    expect(element).toBeDefined()
  })

})