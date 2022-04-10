import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementa = (num: number = 1):void => {
    setCounter(counter + num);
  };

  return (
    <div className="m-2">
      <h3 className="text-xl font-medium">Counter: UseState</h3>
      <br />
      <h3 className="text-xl">Valor: {counter}</h3>

      <button
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 m-3 px-4 rounded"
        onClick={() => incrementa()}
      >
        + 1
      </button>
      <button
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 m-3 px-4 rounded"
        onClick={() => incrementa(5)}
      >
        + 5
      </button>

      <button
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 m-3 px-4 rounded"
        onClick={() => setCounter(0)}
      >
       Reset
      </button>
    </div>
  );
};
