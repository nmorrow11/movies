import React, { Component } from 'react';
import MovieList from './MovieList';

class ListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      searchText: '',
      filteredMovies: props.movies,
      pendingMovieText: '',
      isFiltered: false
    };
  }
  
  componentDidMount() {
    console.log("LIST CONTAINER DID MOUNT");
    var context = this;
    var populatedMovies = this.props.movies.map(function(movie) {
      fetch('https://api.themoviedb.org/3/search/movie?api_key=ed8db9957978c3e11b81a9f498113041&query=' + movie.title)
        .then(response => response.json())
        .then(jsondata => {
          var movieInfo = jsondata.results[0];
          console.log(jsondata.results[0])
          var newData = context.state.movies.map(function(movie2) {
            if (movie2.title === movie.title) {
              movie2.description = movieInfo['overview'];
              // movie2.year = movieInfo
              // movie2.runtime = 
              // movie2.Metascore =
              // movie2.imdbRating = 
            }
            return movie2;
          });
          context.setState({
            movies: newData,
            filteredMovies: newData
          })
        })
      return {
        title: movie.title,
        description: "BLAH BLAHHHH"
      }
    })
    
    this.setState({
      movies: populatedMovies,
      filteredMovies: populatedMovies
    })
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
    
    this.setState({
      isFiltered: true
    })
  }
  
  changeAddMovieText(event) {
    this.setState({
      pendingMovieText: event.target.value
    })
  }
  
  watchedMovie(title) {
    var beenSeen = this.state.movies.map(function(movie) {
      if (title === movie.title) {
        movie.watched = !movie.watched;
      }
      return movie;
    });
    this.setState({
      movies: beenSeen
    })
    console.log(this.state.movies)
  }
    
  addMovieSubmit() {
    var newMovies = this.state.movies;
    newMovies.push({title: this.state.pendingMovieText, watched:false});
    this.setState({
      movies: newMovies,
      pendingMovieText: '',
      filteredMovies: newMovies
    })
  }
  
  displayWatchedMovies(){
    var filtered = this.state.movies.filter(function(movie) {
      return movie.watched === true;
    });
    this.setState({
      filteredMovies: filtered
    })
  }
    displayUnWatchedMovies(){
    var filtered = this.state.movies.filter(function(movie) {
      return movie.watched === false;
    });
    this.setState({
      filteredMovies: filtered
    })
  }
  
  showAllMovies() {
    this.setState({
      filteredMovies: this.state.movies
    })
  }
  
  render() {
    // filter by current search
    // var moviesToShow = []
    // if (this.state.isFiltered) {
    //   var context = this;
    //   moviesToShow = this.state.movies.filter(function(movie) {
    //     return movie.title.toLowerCase().includes(context.state.searchText.toLowerCase());
    //   });
    // } else {
    //   moviesToShow = this.state.movies;
    // }
    
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
        <div>
          <button onClick = {this.displayWatchedMovies.bind(this)}>Show Watched Movies</button>
          <button onClick = {this.displayUnWatchedMovies.bind(this)}>Show Unwatched Movies</button>
          <button onClick = {this.showAllMovies.bind(this)}>Show All The Movies</button>
          <MovieList watch = {this.watchedMovie.bind(this)} movies={this.state.filteredMovies}/>
        </div>
      </div>
    );
  }
}

export default ListContainer;