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
        
        return <div>
            <Header/>
            <NewList news = {this.state.news} donkey = {"my"}>
                <h3>News are:</h3>
            </NewList>
          </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));