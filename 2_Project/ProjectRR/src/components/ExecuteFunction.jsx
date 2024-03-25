import React from "react";

export const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar!</button>
    </div>
  );
};
