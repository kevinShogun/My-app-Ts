import React, { useEffect, useRef, useState } from "react";

type Timer_args = {
  miliseg: number;
  segundos?: number; // significa --> segundos opcional
};

export const Timer = ({ miliseg }: Timer_args) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => setSegundos((s) => s + 1), miliseg);
  }, [miliseg]);

  return (
    <div>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </div>
  );
};
