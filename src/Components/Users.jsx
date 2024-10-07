import React, {useState, useEffect} from 'react'
import axios from "axios"

function Users() {

    const [users, setUsers] = useState(null)

    useEffect(() =>{
        const getUsers = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(response);
            setUsers(response.data)
        };
        getUsers()
    }, [])
  return (
    <>
      <h2>Users</h2>
      <div>
        {users && users.map((user, index) =>(<div key={index}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
        
    ))}
      </div>

    </>
  )
}

export default Users
