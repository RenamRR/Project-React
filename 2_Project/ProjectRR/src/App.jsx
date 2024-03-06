import { useState } from "react";
import "./App.css";
import logodc from "./assets/dcjs.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Desafio 1</h1>
        {/*Imagem em public*/}
        <div>
          <img src="/img1.jpg" alt="Pensador" width={200} height={200} />
        </div>
        {/*Imagem em asset*/}
        <div>
          <img src={logodc} alt="LogoDc" width={200} height={200} />
        </div>
        <ManageData />
        <ListRender />
      </div>
    </>
  );
}

export default App;
