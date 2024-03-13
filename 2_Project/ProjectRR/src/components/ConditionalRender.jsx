import { useState } from "react";

export const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Renata");

  return (
    <div>
      <h1>Isso será exibido ?</h1>
      {x && <p>Se x for True, Sim!</p>}
      {!x && <p>Se x for False, Não !</p>}
      {name == "Renam" ? (
        <div>
          <p>O nome é Renam! </p>
        </div>
      ) : (
        <div>
          <p>Nome não Encontrado! </p>
        </div>
      )}
      <button onClick={() => setName("Renam")}>Clique aqui!</button>
    </div>
  );
};
