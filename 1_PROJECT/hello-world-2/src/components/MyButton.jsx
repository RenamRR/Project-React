import { useState } from 'react'

const MyButton = () => {

    const handleMyEvent = (e) =>{
        console.log(e);

        console.log("Ativou O Evento!");
    };
    //contador de clicks
    const [count, setCount] = useState(0)

    const renderSomething = (x) => {

        if(x){
            return <h1>Renderizando isso!</h1>;
        }else{
            return <h1>Também posso renderizar isso!</h1>;
        }
    };

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique Aqui Tbm!</button>
            </div>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}            
        </div>
    )
};

export default MyButton;