import React from "react";

const user = {
  name: 'Francis',
  lastName: 'Jones',
  age: 16
}

const Header = () => {
  return (<div>
    <div>{user.name}</div>
    <div>{user.lastName}</div>
    <div>{user.age}</div>
  </div>)
}


export default Header;