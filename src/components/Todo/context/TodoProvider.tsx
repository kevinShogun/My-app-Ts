import { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";
import { TodoState } from "../interfaces/interfaces";

const InitialState: TodoState = {
  todosCount: 2,
  todos: [
    {
      id: "1",
      title: "Titulo 1",
      desc: "Descripcion 1",
      completed: false,
    },
    {
      id: "2",
      title: "Titulo 2",
      desc: "Descripcion 2",
      completed: false,
    },
  ],
  completedTodos: 0,
  pendingTodos: 0,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, InitialState);

  const toogleTodo = (id: string) => {
    dispatch({ type: "TOOGLE", payload: { id } });
  };

  const addTodo = (
    title: string,
    completed: boolean,
    desc: string,
    id: string
  ) => {
    dispatch({ type: "ADD_TODO", payload: { title, completed, desc, id } });
  };

  return (
    <TodoContext.Provider
      value={{
        todoState,
        toogleTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
