import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/footer';
import {Library} from './components/library';


class App extends Component {
  render() {
    return (
      <div>
        <div className = "jumbotron">
          <Header />
        </div>
        <div>
          <Library />
        </div>
        <div className = 'jumbotron'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
