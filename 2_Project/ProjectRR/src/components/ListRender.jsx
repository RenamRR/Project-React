import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Thor','Renata','Renam','Nina']);
    
    const [users, setUsers] = useState([
        {id: 1, name:"Thor", age: 15},
        {id: 2, name:"Renata", age: 59},
        {id: 3, name:"Renam", age: 23},
        {id: 4, name:"Nina", age: 10},
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((users) => randomNumber !== users.id)
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) =>(
                    <li key = {user.id}>{user.name}  tem {user.age} anos</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random</button>
        </div>
    )
};

export default ListRender