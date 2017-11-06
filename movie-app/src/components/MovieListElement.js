import React, { Component } from 'react';


class MovieListElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  
  render() {
    return (
      <div className="MovieListElement">
        {this.props.title}
      </div>
    );
  }
}

export default MovieListElement;