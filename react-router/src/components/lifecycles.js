import React, { Component } from "react";

class Life extends Component {
  // 1 get default props

  // 2 set default state
  state = {
    title: "life cycles!"
  };

  // 5 after jsx
  componentDidMount() {
    // срабатывает после рендера
    console.log("5 after jsx");
    //document.querySelector("h3").style.color = "red"; good
  }

  // 3 before render
  componentWillMount() {
    // срабатывает до рендера
    console.log("3 before render");
     //document.querySelector("h3").style.color = "red"; error
  }

  // 4 render jsx

  render() {
    //console.log(this.props);
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    );
  }

  // // 5 after jsx

  // componentDidMount(){
  //   console.log("5 after jsx");
  // }
}

export default Life;