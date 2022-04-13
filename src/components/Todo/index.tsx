import { AddTodo } from "./AddTodo";
import { TodoProvider } from "./context/TodoProvider";
import { TodoList } from "./TodoList";

const MainTodo = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default MainTodo;
