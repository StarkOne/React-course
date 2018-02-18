import React, { Component } from "react";
import classes from "../css/style.css";


class Header extends Component {

  state = {
    keywords: ""
  };

  inputChangeHandler = event => {
    this.setState({
      keywords: event.target.value 
    });
  };
  render() {

    return <header>
        <div className={classes.logo}>logo</div>
        <input type="text" onChange={e => this.inputChangeHandler(e)} />
      </header>;
  }
}

export default Header;