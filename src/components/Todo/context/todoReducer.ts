import { TodoState, Todo } from "../interfaces/interfaces";

type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOOGLE"; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOOGLE":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
