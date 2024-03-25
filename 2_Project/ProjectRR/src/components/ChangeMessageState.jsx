import React from "react";

export const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "2Oi", "Tudo", "Bem"];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  );
};
