import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Thor','Renata','Renam','Nina']);
    
    return (
        <div>
            <ul>
                {list.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender