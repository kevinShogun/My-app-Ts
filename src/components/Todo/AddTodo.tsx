import { Todo } from "./interfaces/interfaces";
import { useForm } from "../../hooks/useForm";
import { useTodo } from "../../hooks/useTodo";

export const AddTodo = () => {
  const { addTodo, pending } = useTodo();

  const { title, completed, desc, id, handleChange } = useForm<Todo>({
    title: "",
    completed: false,
    desc: "",
    id: Math.random().toString(),
  });

  const handleSubmit = () => {
    if (title.trim() === "") {
      return;
    }
    if (desc.trim() === "") {
      return;
    }
    addTodo(title, completed, desc, id);
  };

  return (
    <div className="w-full shadow-xl shadow-cyan-500/10 rounded-xl flex flex-col justify-center items-center ">
      <label className="font-semibold text-lg text-red-400">Pending: {pending}</label>
      <div className="my-2 ml-5 w-full">
        <label className="font-semibold text-lg">Title: </label>

        <input
          type={"text"}
          className="bg-transparent border-b border-solid ml-2 outline-none w-5/6"
          onChange={handleChange}
          name={"title"}
          value={title}
        />
        <button
          className=" ml-8 relative top-3 font-bold text-3xl bg-cyan-500 px-3 py-1 rounded-lg hover:shadow-2xl hover:shadow-indigo-500/50"
          onClick={handleSubmit}
        >
          +
        </button>
      </div>
      <br />

      <br />
      <div className="my-2 ml-5 w-full">
        <label className="font-semibold text-lg">Description: </label>

        <input
          type={"text"}
          className="bg-transparent border-b border-solid ml-2 outline-none w-5/6"
          onChange={handleChange}
          name="desc"
          value={desc}
        />
      </div>
      <br />
    </div>
  );
};
