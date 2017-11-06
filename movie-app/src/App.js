import React, { Component } from 'react';
import './App.css';
import ListContainer from './components/ListContainer';

var movies = [
  {title: 'Happy Gilmore'},
  {title: 'Old School'},
  {title: 'Big Daddy'},
  {title: 'Billy Madison'},
  {title: 'The Waterboy'},
  {title: 'Old Boy'},
  {title: 'The Shawshank Redemption'},
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
