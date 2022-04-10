import React, { useReducer } from "react";

const initalState = {
  count: 10,
};

type ActionType =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "CUSTOM"; payload: number };

const counterReducer = (state: typeof initalState, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "CUSTOM":
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};

export const CounterRed = () => {
  const [{ count }, dispatch] = useReducer(counterReducer, initalState);

  return (
    <div>
      <h3 className="ml-3 text-xl font-medium">Counter: {count}</h3>

      <button
        className="bg-transparent hover:bg-orange-400 text-orange-400 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded m-2"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        + 1
      </button>

      <button
        className="bg-transparent hover:bg-orange-400 text-orange-400 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded m-2"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        - 1
      </button>

      <button
        className="bg-transparent hover:bg-orange-400 text-orange-400 font-semibold hover:text-white py-2 px-4 border border-orange-400 hover:border-transparent rounded m-2"
        onClick={() => dispatch({ type: "CUSTOM", payload: 100 })}
      >
        + 100
      </button>
    </div>
  );
};
