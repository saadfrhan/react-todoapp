import { screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import { renderWithProviders } from '@/lib/test-utils'
import NewTodo from '@/features/todo/new'
import TodoList from '@/features/todo/list'

describe('App', () => {
  it('renders heading', () => {
    renderWithProviders(<App />)
    const heading = screen.getByRole('heading', { name: 'Todo App' })
    expect(heading).toBeInTheDocument()
  })

  it('renders NewTodo component', () => {
    renderWithProviders(<NewTodo />)
    expect(screen.getByTestId('new-todo')).toBeInTheDocument()
  })

  it('renders TodoList component', () => {
    renderWithProviders(<TodoList />)
    expect(screen.getByTestId('todo-list')).toBeInTheDocument()
  })
})