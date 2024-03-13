import { useState } from "react";
import "./App.css";
import logodc from "./assets/dcjs.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import { ConditionalRender } from "./components/ConditionalRender";
import { ShowUserName } from "./components/ShowUserName";
import { CarDetails } from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  const name = "Renata";
  const [userNames] = useState("Maria");

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
        <ConditionalRender />
        {/*props*/}
        <ShowUserName name={userNames} />
        {/*Destructuring*/}
        <CarDetails brand="VW" km={1000} color="Preto" />
      </div>
    </>
  );
}

export default App;
