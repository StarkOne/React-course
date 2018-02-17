import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div className="title">
        <h1>hello world!</h1>
        <p>Vlad</p>
      </div>;
}

ReactDOM.render(<App/>, document.querySelector("#root"));