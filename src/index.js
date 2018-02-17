import React, { Component } from "react";
import ReactDOM from 'react-dom';
// components
import JSON from './db.json'
import Header from './components/header'
import NewList from './components/news_list'

class App extends Component {
    state = {
        news: JSON
    }
    render() {
        console.log(this.state.news);
        return <div>
            <Header/>
            <NewList news = {this.state.news} donkey = {"my"}/>
          </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));