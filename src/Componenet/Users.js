import axios from "axios";
import React, { useEffect, useState } from "react";

const Users= () => {
 const [user,setUser]=useState([])
 useEffect(()=>
  {axios.get("https://jsonplaceholder.typicode.com/users")
  .then( res=> {console.log(res.data)
  setUser(res.data)})
})
 return (
   <>

    <div>
      <ul>
        {
          user.map(user=> <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
   </>
 );
};
export default Users;