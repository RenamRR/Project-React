import React from "react";

export const Fragment = ({ propFragment }) => {
  return (
    <>
      <h2>Primeiro Título</h2>
      <h3>Segundo Título</h3>
      <h4>{propFragment}</h4>
    </>
  );
};
