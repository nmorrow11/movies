import React, { Component } from 'react';
import './App.css';
import ListContainer from './components/ListContainer';

var movies = [

];

class App extends Component {
  render() {
    console.log('got movies,', movies);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MovieList!</h1>
        </header>
        <p className="App-intro">
        </p>
        <ListContainer movies={movies}/>
      </div>
    );
  }
}

export default App;
