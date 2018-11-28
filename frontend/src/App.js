import React, { Component } from 'react';
import './App.css';
import './components/header'
import Header from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Shop from './components/shop';


class App extends Component {
  render() {
    return (
      <div>
        <div className = "jumbotron">
          <Header />
        </div>
        <div>
          <Shop />
        </div>
        <div className = 'jumbotron'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
