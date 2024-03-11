import { useEffect, useState } from "react"

import User from "./user"

export default function Users (){

    const [users, setUsers]= useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    },[])
    return(
        <div style={{border :'2px solid red'}}>
            <h3>Users : {users.length}</h3>
            {
                users.map( user => <User user={user}></User>)
            }
        </div>
    )
}
