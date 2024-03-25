import { useState } from "react";
import "./App.css";
import logodc from "./assets/dcjs.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import { ConditionalRender } from "./components/ConditionalRender";
import { ShowUserName } from "./components/ShowUserName";
import { CarDetails } from "./components/CarDetails";
import { Fragment } from "./components/Fragment";
import { Container } from "./components/Container";
import { ExecuteFunction } from "./components/ExecuteFunction";
import { Message } from "./components/Message";
import { ChangeMessageState } from "./components/ChangeMessageState";
function App() {
  //const [count, setCount] = useState(0);

  //const name = "Renata";
  const [userNames] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Preto", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "branco", newCar: true, km: 201 },
    { id: 3, brand: "FIAT", color: "Vermelho", newCar: true, km: 330 },
  ];

  function showMessage() {
    console.log("Evento do componente");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

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
        <CarDetails brand="VW" km={1000} color="Preto" newCar={true} />
        {/* Reaproveitando*/}
        <CarDetails brand="Ford" color="Vermelho" km={0} newCar={false} />
        <CarDetails brand="Ford" color="Verde" km={123} newCar={true} />
        {/*Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
        <Fragment propFragment="Teste" />
        {/*Children*/}
        <Container myValue="teste">
          <p>E este é o conteudo</p>
        </Container>
        {/*Executar function */}
        <ExecuteFunction myFunction={showMessage} />
        {/*State lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage}/>
      </div>
    </>
  );
}

export default App;
