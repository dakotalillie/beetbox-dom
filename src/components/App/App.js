import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Welcome from './Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome" component={Welcome} />
      </div>
    );
  }
}

export default App;
