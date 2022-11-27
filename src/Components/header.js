import React from "react";

export const Header = () => {
  return (
    <div
    className="header"
    >
     
   <div className="logo-item">
   <h1 >
          <a href="/">Users</a>
        </h1> 
        <span>|</span>
   </div>
    
      <div className="menu-item">
        <h4>
          <a href="/users">Show Users</a>
        </h4>
        <h4>
          <a href="/sign-in">Sign In</a>
        </h4>
      </div>
    </div>
  );
};
export default Header;
