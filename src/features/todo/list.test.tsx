import { screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TodoList from './list'
import { renderWithProviders } from '@/lib/test-utils'

const mockDispatch = vi.fn()

vi.mock('../state/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}))

describe('TodoList', () => {
  it('renders list of TodoItems', () => {
    renderWithProviders(<TodoList/>, {
			preloadedState: {
				todo: {
					todos: [
						{
							id: '1',
							title: "Test todo 1",
							isDone: true,
						}
					]
				}
			}
		})
    expect(screen.getAllByTestId('todo-item')).toHaveLength(1)
  })

  it('renders Delete All button when todos exist', () => {
    renderWithProviders(<TodoList />, {
			preloadedState: {
				todo: {
					todos: [
						{
							id: '1',
							title: "Test todo 1",
							isDone: true,
						}
					]
				}
			}
		})
    expect(screen.getByText(/Delete All/i)).toBeInTheDocument()
  })

  it('renders empty message if no todos', () => {
    // TODO: fix this test
    renderWithProviders(<TodoList />)
    expect(screen.getByText(/no todos/i)).toBeInTheDocument()
  })
})