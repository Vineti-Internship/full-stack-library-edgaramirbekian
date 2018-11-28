import React, { Component } from 'react';
import './App.css';
import './components/header'
import Header from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className = "jumbotron">
        <Header />
      </div>
    );
  }
}

export default App;
