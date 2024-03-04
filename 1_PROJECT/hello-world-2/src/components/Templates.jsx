const Templates = () => {
    const name = 'Renam'
    const data = {
        job: 'Programmer',
        age: 23,
    }
    return(
        <div>
            <h1> Olá meu nome é {name}</h1>
            <p>Minha profissão é {data.job} e tenho {data.age} anos</p>
        </div>
    )
};

export default Templates;