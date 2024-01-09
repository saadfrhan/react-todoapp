

import TodoItem from './item'

import { removeAll } from '@/features/todo/slice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { Button } from '@/components/ui/button'

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos)
  const dispatch = useAppDispatch()

  return (
    <div data-testid="todo-list">
      <div className='flex flex-col gap-2 mt-3'>
			{todos.length > 0 ? todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      )) : <p>No todos.</p>}
			</div>

      {todos.length > 0 && (
        <Button
          onClick={() => dispatch(removeAll())}
					className='mt-3 w-full'
        >
          Delete All
        </Button>
      )}
    </div>
  )
}

export default TodoList