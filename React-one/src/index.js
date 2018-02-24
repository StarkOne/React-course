import React, { Component } from "react";
import ReactDOM from 'react-dom';
// components
import JSON from './db.json'
import Header from './components/header'
import NewList from './components/news_list'

class App extends Component {
    state = {
        news: JSON,
        filtered: []

    }

    getKeyword = (event) => {
        let keyword = event.target.value.toLowerCase();
        let filtered = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyword) > -1;
        });
        this.setState({
            filtered: filtered
        })
    }
    render() {
        let newsFiltere = this.state.filtered;
        let newsWhole = this.state.news;
        return <div>
            <Header keywords={this.getKeyword} />
            <NewList news={newsFiltere.length === 0 ? newsWhole : newsFiltere}>
              <h3>News are:</h3>
            </NewList>
          </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));