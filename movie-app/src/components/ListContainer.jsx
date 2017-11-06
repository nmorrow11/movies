import React, { Component } from 'react';
import MovieList from './MovieList';

class ListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      searchText: '',
      filteredMovies: props.movies,
      pendingMovieText: ''
    };
  }
  
  changeText(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  
  searchForMovie() {
    var textForSearch = this.state.searchText;
    var filtered = this.state.movies.filter(function(movie) {
      return movie.title.toLowerCase().includes(textForSearch.toLowerCase());
    });
    console.log('filtered is', filtered)
    this.setState({
      filteredMovies: filtered,
      searchText: ''
    })
  }
  
  changeAddMovieText(event) {
    this.setState({
      pendingMovieText: event.target.value
    })
  }
  
  addMovieSubmit() {
    var newMovies = this.state.movies;
    newMovies.push({title: this.state.pendingMovieText});
    this.setState({
      movies: newMovies,
      pendingMovieText: '',
      filteredMovies: newMovies
    })
  }
  
  render() {
    console.log('rendering', this.state);
    return (
      <div className="ListContainer">
        <div className="add-movie">
          <input type="text" onChange={this.changeAddMovieText.bind(this)} placeholder="Add Movie..." value={this.state.pendingMovieText}></input>
          <button className="submit-container" onClick={this.addMovieSubmit.bind(this)}>
            <i class="fa fa-plus input-submit"></i>
          </button>
        </div>
        <div className="search">
          <input type="text" onChange={this.changeText.bind(this)} placeholder="Search..." value={this.state.searchText}></input>
          <button className="submit-container" onClick={this.searchForMovie.bind(this)}>
            <i class="fa fa-search input-submit"></i>
          </button>
        </div>
        <MovieList movies={this.state.filteredMovies}/>
      </div>
    );
  }
}

export default ListContainer;