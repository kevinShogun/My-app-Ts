import { useState } from "react";
import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimePadre } from "./components/TimePadre";
import { CounterRed } from "./components/CounterRed";
import { Form } from "./components/Form";
import MainTodo from "./components/Todo";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2 cursor-pointer" onClick={() => setShow(false)}>
            <div
              className={`
              ${
                !show
                  ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            `}
            >
              <svg
                className={`mr-2 w-5 h-5 ${
                  !show
                    ? "text-blue-500 group-hover:text-blue-500 dark:text-blue-500"
                    : " text-gray-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Profile
            </div>
          </li>
          <li className="mr-2 cursor-pointer" onClick={() => setShow(true)}>
            <div
              className={`
              ${
                show
                  ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            `}
              aria-current="page"
            >
              <svg
                className={`mr-2 w-5 h-5 ${
                  show
                    ? "text-blue-500 group-hover:text-blue-500 dark:text-blue-500"
                    : " text-gray-600 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Todo
            </div>
          </li>
        </ul>
      </div>
      <br />
      <br />

      {!show ? (
        <>
          <h1 className="text-gray-200 font-semibold text-2xl my-2">
            React + TypeScript
          </h1>
          <br />
          <hr />
          <h3 className="text-xl font-semibold">UseState</h3>
          <Counter />
          <Usuario />
          <br />
          <hr />
          <h3 className="text-xl font-semibold">UseEffect</h3>
          <br />
          <TimePadre />
          <br />
          <hr />
          <h3 className="text-xl font-semibold">UseReducer</h3>
          <br />
          <CounterRed />
          <br />
          <hr />
          <h3 className="text-xl font-semibold">Custom Hook</h3>
          <Form />
        </>
      ) : (
        <>
          <br />
          <hr />
          <h3 className="text-3xl font-bold">Todo App</h3>
          <br />
          <br />

          <MainTodo />
        </>
      )}
    </div>
  );
}

export default App;
