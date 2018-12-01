import React, { Component } from 'react';
import Main from './components/main'
import './App.css';
import {Header} from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/footer';
// import { Authors } from './components/authors';
// import { Books } from './components/books';
// import {SingleAuthorBooks} from './components/single_author_books';





class App extends Component {
  render() {
    return (
      <div>
        <div className = "jumbotron">
          <Header />
        </div>

          <Main />
          {/* <SingleAuthorBooks /> */}

        <div className = 'jumbotron'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
