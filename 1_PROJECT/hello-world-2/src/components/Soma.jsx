const Soma = () => {
    const data = {
        a: 25,
        b: 30,
    };

    return(
        <div>
            <div>
                <h1>Numero a = {data.a} e b = {data.b}</h1>
            </div>
            <div>
                <button onClick={() => console.log(data.a + data.b)}>Clique Aqui Para Somar!</button>
            </div>
        </div>
    )
};

export default Soma;