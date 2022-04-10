import React, { useState } from "react";
import { Timer } from "./Timer";

export const TimePadre = () => {
  const [miliseg, setMiliseg] = useState(1000);
  return (
    <div>
      <span>Millisegundos: {miliseg}</span>

      <button
        className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded m-2"
        onClick={() => setMiliseg(1000)}
      >
        1000
      </button>

      <button
        className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded m-2"
        onClick={() => setMiliseg(5000)}
      >
        5000
      </button>
      <Timer miliseg={miliseg} />
    </div>
  );
};
