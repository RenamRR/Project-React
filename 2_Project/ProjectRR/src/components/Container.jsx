import React from "react";

export const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      {children}
      <p>Meu valor é : {myValue}</p>
    </div>
  );
};
