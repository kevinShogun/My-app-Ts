import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export interface TodoContextProps {
  todoState: TodoState;
  toogleTodo: (id: string) => void;
  addTodo: (
    title: string,
    completed: boolean,
    desc: string,
    id: string
  ) => void;
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
