import { FC } from "react";

import { useAppDispatch } from "@/app/hooks";
import { remove, update } from "./slice";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { TodoI } from "@/types";

const TodoItem: FC<{
  todo: TodoI;
}> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const updateTodo = (title: string = todo.title) => {
    dispatch(
      update({
        todo: {
          isDone: !todo.isDone,
          title,
        },
        id: todo.id,
      })
    );
  };

  return (
    <div
      className="flex justify-between gap-3 p-1 items-center"
      data-testid="todo-item"
    >
      <div className="flex items-center gap-3">
			<Checkbox onClick={() => updateTodo()} checked={todo.isDone} role="checkbox" />
      <p
        className="max-w-[380px]"
        onDoubleClick={() => {
          const newTitle = prompt("New title:", todo.title);
          if (newTitle) {
            updateTodo(newTitle);
          }
        }}
      >
        {todo.title}
      </p>
			</div>
      <Button
        variant="destructive"
        name="Delete"
				role="button"
        onClick={() =>
          dispatch(
            remove({
              id: todo.id,
            })
          )
        }
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
