import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// components
import Home from './components/home';
import Posts from './components/posts';
import Profile from "./components/profiles";
import PostItem from "./components/post_item";
import Life from "./components/lifecycles";

// myawesomeapp.com/posts
//myawesomeapp.com/profile/posts

const App = () => {
  return <BrowserRouter>
      <div>
        <header>
          <NavLink to="/" activeStyle={{ color: "red" }} activeClassName="selected">
            Home
          </NavLink>
          <br />
          <NavLink to="/posts">Posts</NavLink>
          <br />
          <NavLink to={{ pathname: "/profiles" }}>Profile</NavLink>
          <br />
          <NavLink to="/life">Life</NavLink>
          <br />
          <hr />
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/profiles" component={Profile} />
          <Route path="/posts" component={Posts} />
          <Route path="/life" component={Life} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>;
}
ReactDOM.render(<App /> , document.querySelector('#root'));