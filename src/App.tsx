import { useAppDispatch } from "./app/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import TodoList from "./features/todo/list";
import NewTodo, { HandleSubmit } from "./features/todo/new";
import { add } from "./features/todo/slice";

export default function App() {

	const dispatch = useAppDispatch();

	const handleSubmit: HandleSubmit = (values, { resetForm }) => {
		dispatch(
			add({
				title: values.title,
			})
		)
		resetForm();
	}

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <NewTodo handleSubmit={handleSubmit} />
          <TodoList />
        </CardContent>
      </Card>
    </div>
  );
}
