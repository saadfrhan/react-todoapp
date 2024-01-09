import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import TodoList from "./features/todo/list";
import NewTodo from "./features/todo/new";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <NewTodo />
          <TodoList />
        </CardContent>
      </Card>
    </div>
  );
}
