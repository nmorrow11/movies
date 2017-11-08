import React, { Component } from 'react';
import MovieListElement from './MovieListElement';

class MovieList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var movieElements = [];
    for (var i = 0; i < this.props.movies.length; i++) {
      movieElements.push(
        <MovieListElement getDetails = {this.props.getDetails} watch = {this.props.watch} movieInfo={this.props.movies[i]}/>
      )  
    }
    if (movieElements.length === 0) {
      movieElements.push(
        <div>
          There is no match to your search.
        </div>
      )
    }
    return (
      <div className="MovieList" >
        {movieElements}
      </div>
    );
  }
}

export default MovieList;