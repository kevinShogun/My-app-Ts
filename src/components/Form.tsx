import React, { SyntheticEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

interface formData {
  age: number;
  name: string;
  email: string;
  password: string;
}

export const Form = () => {
  const [show, setShow] = useState(false);
  const { age, name, email, password, handleChange } = useForm<formData>({
    age: 0,
    name: "",
    email: "",
    password: "",
  });

  const submit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div>
      <main className="relative min-h-screen w-full">
        <div className="p-6" x-data="app">
          <header className="flex w-full justify-between">
            <svg
              className="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                stroke-width="1"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </header>

          <section className="absolute w-5/6 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            <div x-show="isLoginPage" className="space-y-4">
              <header className="mb-3 text-2xl font-bold">
                Create your profile
              </header>
              <form onSubmit={submit}>
                <div className="w-full rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200">
                  <input
                    type="text"
                    placeholder="Age"
                    onChange={handleChange}
                    name="age"
                    className="my-3 font-medium text-gray-800 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <div className="w-full my-5 rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200">
                  <input
                    type="text"
                    placeholder="Name (optional)"
                    onChange={handleChange}
                    name="name"
                    className="my-3 font-medium text-gray-800 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <div className="w-full my-5 rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    className="my-3 font-medium text-gray-800 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <div className="w-full my-5 rounded-lg bg-gray-50 px-4 ring-2 ring-gray-200">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    className="my-3 font-medium text-gray-800 w-full border-none bg-transparent outline-none focus:outline-none"
                  />
                </div>
                <button className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
                  CREATE ACCOUNT
                </button>
              </form>
            </div>
            {show && <p>{JSON.stringify(age)}</p>}
            {show && <p>{JSON.stringify(name)}</p>}
            {show && <p>{JSON.stringify(email)}</p>}
            {show && <p>{JSON.stringify(password)}</p>}
          </section>
        </div>
      </main>
    </div>
  );
};
