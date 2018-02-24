import React, { Component } from "react";
import classes from "../css/style.css";


const Header = props => {
  return (
    <header>
      <div className={classes.logo}>logo</div>
      <input type="text" onChange={props.keywords} />
    </header>
  )
};

export default Header;

