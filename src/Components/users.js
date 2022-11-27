import React, { useState } from 'react'


const Users = ({users}) => {

  const [showuser, setShowUser] = useState(true);
     console.log(users)   

  return (<>
    <div><h1>Users</h1></div>
    
    <button style={{border:'none',background:"#c7f78f",padding:"1em 1.5em", borderRadius:"5%",color: " #3e7400"}} onClick={()=>setShowUser(!showuser)}>toggle Users</button>
      {showuser? users.map(user => (
          
 <div style={{background:'#f7f596'}} key={user.id}>
         <h5>{user.name}</h5>
         <p>{user.email}</p>
      <h4>{user.username}</h4>
 </div>
      )):null}
      </>
  )
}

export default Users