import { useTodo } from "../../hooks/useTodo";

export const TodoList = () => {
  const { todos, toogleTodo } = useTodo();

  const toogle = (id: string) => {
    toogleTodo(id);
  };

  return (
    <div className="my-8 flex flex-col justify-center items-center w-full">
      {todos.map((todo, index) => (
        <div
          className="w-5/6 shadow-xl shadow-indigo-500/10 rounded-xl  my-5 p-1 ring-1 flex justify-between items-center"
          key={index}
        >
          <div className="m-2">
            <div className="flex p-1 left-0 relative">
              <p className="font-semibold text-xl">Titutlo: </p>
              <p
                className={`font-medium mt-1 mx-3 ${
                  todo.completed && "line-through"
                }`}
              >
                {todo.title}
              </p>
            </div>
            <div className="flex p-1 left-0 relative">
              <p className="font-semibold text-xl">Descripción: </p>
              <p
                className={`font-medium mt-1 mx-3 ${
                  todo.completed && "line-through"
                }`}
              >
                {todo.desc}
              </p>
            </div>
          </div>

          <button
            className={`bg-transparent hover:bg-${
              todo.completed ? "orange" : "green"
            }-400 text-${
              todo.completed ? "orange" : "green"
            }-400 font-semibold hover:text-white py-2 px-4 border border-${
              todo.completed ? "orange" : "green"
            }-400 hover:border-transparent rounded m-2`}
            onClick={() => toogle(todo.id)}
          >
            {todo.completed ? "Uncompleted" : "Completed"}
          </button>
        </div>
      ))}
    </div>
  );
};
