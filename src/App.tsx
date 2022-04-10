import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimePadre } from "./components/TimePadre";
import { CounterRed } from "./components/CounterRed";

function App() {
  return (
    <div className="">
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
      <CounterRed/>
    </div>
  );
}

export default App;
