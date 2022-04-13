import { useContext } from "react";
import { TodoContext } from "../components/Todo/context/TodoContext";
export const useTodo = () => {
  const { addTodo, todoState, toogleTodo } = useContext(TodoContext);
  const { todos } = todoState;

  return {
    addTodo,
    todos,
    toogleTodo,
    pending: todos.filter((todo) => !todo.completed).length,
  };
};
