import React from 'react'

export const Header = () => {
  return (
      <div style={{display:'flex',alignItems:"center",justifyContent:"space-between",width:"30%",paddingLeft:"5%"}}>
          <h1><a href='/'>Users</a></h1>|
          <h2><a href='/users'>Show Users</a></h2>
          <h2><a href='/sign-in'>Sign In</a></h2>
    </div>
  )
}
export default Header
