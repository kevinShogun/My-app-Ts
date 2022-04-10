import { useState } from "react";

interface User {
  uid: string;
  displayName: string;
  email: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "132",
      displayName: "Fulano",
      email: "",
    });
  };
  return (
    <div className="m-2">
      <h3 className="text-xl font-medium">Counter: UseState</h3>
      <button
        className="bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded my-2"
        onClick={login}
      >
        Login
      </button>

      <br />
      {
          user ? (<pre>{JSON.stringify(user)}</pre>) : (<p>Usuario deslogeado</p>)
      }
    </div>
  );
};
